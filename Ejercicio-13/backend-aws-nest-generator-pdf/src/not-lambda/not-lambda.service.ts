import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { launch } from 'puppeteer'; //TODO esto funciona es en local
import { join } from 'path';
import Handlebars from 'handlebars';
import { PDF } from 'src/interface/pdf.interface';

@Injectable()
export class NotLambdaService {
  private async getPdfFromPuppeter(data: PDF): Promise<Buffer> {
    try {
      const browser = await launch({
        headless: true,
        userDataDir: '/dev/null',
      });

      const dirTemplate = join(
        `${__dirname}`,
        '..',
        'template',
        'template.hbs',
      );
      const html = readFileSync(dirTemplate, 'utf-8');
      Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
        return arg1 == arg2 ? options.fn(this) : options.inverse(this);
      });
      const template = Handlebars.compile(html);
      const templateHandlebars = template(data);

      const page = await browser.newPage();
      await page.setContent(templateHandlebars, {
        waitUntil: 'networkidle2',
      });
      const buffer = await page.pdf({
        format: 'A4',
        landscape: false,
      });
      return buffer;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Funcion crear PDF sin lambda
   * @param user
   */
  public async buildPdf(data: any): Promise<string> {
    const buffer = await this.getPdfFromPuppeter(data);
    return buffer.toString('base64');
  }
}
