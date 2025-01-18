# cloud-computing-serverless-function

## Gruppe
Jonas Reuber (mat. Nr. 29641725)
Phillip Brädnle (mat. Nr. 27740413)

## Beschreibung
Unsere Funktion nimmt eine Ziel URL als Parameter entgegen und gibt eine html Seite zurück, die einen QR code zu der gegebenen URL anzeigt.
Demnach ist das Ergebniss im Browser (statt in Postman) deutlich besser, da die in Postman integrierte html darstellung der Antwort das script, dass den QR code erstellt nicht ausführt.

## URL der Function in der Cloud
https://cc-qrcodegenerator.azurewebsites.net/api/QRCodeGenerator?

## Benötigte Parameter
target_url=https://www.example.com

## Optionale Parameter Farbe des QR Codes
dark_colour=000000
bright_colour=ffffff