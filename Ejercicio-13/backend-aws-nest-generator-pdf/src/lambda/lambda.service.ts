import chromium from 'chrome-aws-lambda';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { readFileSync } from 'fs';

/**
 * Esto es el servicio para produccion
 */
@Injectable()
export class LambdaService {
  private async getPdfFromPuppeter(data: any): Promise<Buffer> {
    const puppeteer = chromium.puppeteer;

    const browser = await puppeteer.launch({
      headless: true,
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
    });
    const newData = JSON.parse(data);
    const dirTemplate = join(`${__dirname}`, '..', 'template', 'template.hbs');
    const html = readFileSync(dirTemplate, 'utf-8');
    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    });
    const template = Handlebars.compile(html);
    const templateHandlebars = template(newData);

    const page = await browser.newPage();
    await page.setContent(templateHandlebars, {
      waitUntil: 'load',
    });
    const buffer = await page.pdf({
      format: 'A4',
      landscape: false,
    });
    return buffer;
  }

  /**
   * Funcion crear PDF sin lambda
   * @param user
   */
  public async buildPdf(user: { name: string }): Promise<string> {
    const buffer = await this.getPdfFromPuppeter(user);
    return buffer.toString('base64');
  }
}
