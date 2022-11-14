Ejercicio 13
Generar un contrato de negocio en PDF
	HU: Yo como usuario deseo realizar un servicio web que reciba la información del front preparado
		-CA: necesito crear un endpoint (/create-pdf) el cual recibirá el siguiente JSON (No considerar valores):
			{
			  "senderName": "Jonatan",
			  "senderCompany": "NTTDATA",
			  "senderSlogan": "Trusted Global Innovator",
			  "senderTel": "999777777",
			  "senderSite": "Lima",
			  "senderEmail": "email@domail.com",
			  "senderLocation": "Peru",
			  "clientName": "Corporación Nueva Limeña",
			  "clientCompany": "LimaGroup Limeñita",
			  "proposalShortDescription": "Proposal to Tech XYZ (John Stone)",
			  "proposalDate": "20/01/2022",
			  "proposalNumber": "123",
			  "proposalIntroduction": "<p>Proposal Number: 123456 - 05/07/2020 - São Paulo / Brazil Dear John Stone, Thank you for your interest in my services. This document describes the proposal for the web design implementation. I am confident that I can work with you and help your team achieve their goals. Please, find below the scope description and the costs.&nbsp;</p>",
			  "projectScope": "<p><strong>Phase 1</strong> - Create a web design system for an application on top of Bulma framework.</p><p><strong>Phase 2</strong> - Implementing HTML/CSS for web page layouts based on wireframes provided by the company team.</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
			  "servicesList": [
				{
				  "type": "hour"
				},
				{
				  "data": [
					{
					  "service": "Front-end development",
					  "hours": "50",
					  "price": "100",
					  "total": "5000"
					}
				  ]
				}
			  ],
			  "aditionalInformation": "<p>This proposal is valid for up to 30 days after submission. In addition, by reading this proposal, you agree that any information contained here is confidential and will not be shared with third parties without permission.</p>"
			}
		-CA el resultado del servicio será emitir un PDF con un diseño especifico (template).
			

