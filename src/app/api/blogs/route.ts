
import stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import middleware from "../middleware";
const keys:any=process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
const stripeInstance = new stripe(keys);
export async function POST(req:any,res:any) {
  await middleware(req)
    try {
      const body = await req.json()
       
        if(body)
         { 
           const session = await stripeInstance?.checkout?.sessions?.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: body.product_name,
                    images: [body.product_image],},
                  unit_amount: body.product_price*100,
                },
                quantity: body.product_quantity,
              },

            ],
            mode: "payment",
            invoice_creation: {
              enabled: true,
            },
            shipping_address_collection: {
              allowed_countries: [
                "AD", // Andorra
                "AE", // United Arab Emirates
                "AF", // Afghanistan
                "AG", // Antigua and Barbuda
                "AI", // Anguilla
                "AL", // Albania
                "AM", // Armenia
                "AO", // Angola
                "AQ", // Antarctica
                "AR", // Argentina
                "AT", // Austria
                "AU", // Australia
                "AW", // Aruba
                "AX", // Åland Islands
                "AZ", // Azerbaijan
                "BA", // Bosnia and Herzegovina
                "BB", // Barbados
                "BD", // Bangladesh
                "BE", // Belgium
                "BF", // Burkina Faso
                "BG", // Bulgaria
                "BH", // Bahrain
                "BI", // Burundi
                "BJ", // Benin
                "BL", // Saint Barthélemy
                "BM", // Bermuda
                "BN", // Brunei Darussalam
                "BO", // Bolivia (Plurinational State of)
                "BQ", // Bonaire, Sint Eustatius and Saba
                "BR", // Brazil
                "BS", // Bahamas
                "BT", // Bhutan
                "BV", // Bouvet Island
                "BW", // Botswana
                "BY", // Belarus
                "BZ", // Belize
                "CA", // Canada
                "CD", // Congo (Democratic Republic of the)
                "CF", // Central African Republic
                "CG", // Congo
                "CH", // Switzerland
                "CI", // Côte d'Ivoire
                "CK", // Cook Islands
                "CL", // Chile
                "CM", // Cameroon
                "CN", // China
                "CO", // Colombia
                "CR", // Costa Rica
                "CV", // Cabo Verde
                "CW", // Curaçao
                "CY", // Cyprus
                "CZ", // Czech Republic
                "DE", // Germany
                "DJ", // Djibouti
                "DK", // Denmark
                "DM", // Dominica
                "DO", // Dominican Republic
                "DZ", // Algeria
                "EC", // Ecuador
                "EE", // Estonia
                "EG", // Egypt
                "EH", // Western Sahara
                "ER", // Eritrea
                "ES", // Spain
                "ET", // Ethiopia
                "FI", // Finland
                "FJ", // Fiji
                "FK", // Falkland Islands (Malvinas)
                // "FM", // Micronesia (Federated States of)
                "FO", // Faroe Islands
                "FR", // France
                "GA", // Gabon
                "GB", // United Kingdom of Great Britain and Northern Ireland
                "GD", // Grenada
                "GE", // Georgia
                "GF", // French Guiana
                "GG", // Guernsey
                "GH", // Ghana
                "GI", // Gibraltar
                "GL", // Greenland
                "GM", // Gambia
                "GN", // Guinea
                "GP", // Guadeloupe
                "GQ", // Equatorial Guinea
                "GR", // Greece
                "GS", // South Georgia and the South Sandwich Islands
                "GT", // Guatemala
                "GU", // Guam
                "GW", // Guinea-Bissau
                "GY", // Guyana
                "HK", // Hong Kong
                "HN", // Honduras
                "HR", // Croatia
                "HT", // Haiti
                "HU", // Hungary
                "ID", // Indonesia
                "IE", // Ireland
                "IL", // Israel
                "IM", // Isle of Man
                "IN", // India
                "IO", // British Indian Ocean Territory
                "IQ", // Iraq
                "IS", // Iceland
                "IT", // Italy
                "JE", // Jersey
                "JM", // Jamaica
                "JO", // Jordan
                "JP", // Japan
                "KE", // Kenya
                "KG", // Kyrgyzstan
                "KH", // Cambodia
                "KI", // Kiribati
                "KM", // Comoros
                "KN", // Saint Kitts and Nevis
                "KR", // Korea (Republic of)
                "KW", // Kuwait
                "KY", // Cayman Islands
                "KZ", // Kazakhstan
                "LA", // Lao People's Democratic Republic
                "LB", // Lebanon
                "LC", // Saint Lucia
                "LI", // Liechtenstein
                "LK", // Sri Lanka
                "LR", // Liberia
                "LS", // Lesotho
                "LT", // Lithuania
                "LU", // Luxembourg
                "LV", // Latvia
                "LY", // Libya
                "MA", // Morocco
                "MC", // Monaco
                "MD", // Moldova (Republic of)
                "ME", // Montenegro
                "MF", // Saint Martin (French part)
                "MG", // Madagascar
                "MK", // North Macedonia
                "ML", // Mali
                "MM", // Myanmar
                "MN", // Mongolia
                "MO", // Macao
                "MQ", // Martinique
                "MR", // Mauritania
                "MS", // Montserrat
                "MT", // Malta
                "MU", // Mauritius
                "MV", // Maldives
                "MW", // Malawi
                "MX", // Mexico
                "MY", // Malaysia
                "MZ", // Mozambique
                "NA", // Namibia
                "NC", // New Caledonia
                "NE", // Niger
                // "NF", // Norfolk Island
                "NG", // Nigeria
                "NI", // Nicaragua
                "NL", // Netherlands
                "NO", // Norway
                "NP", // Nepal
                "NR", // Nauru
                "NU", // Niue
                "NZ", // New Zealand
                "OM", // Oman
                "PA", // Panama
                "PE", // Peru
                "PF", // French Polynesia
                "PG", // Papua New Guinea
                "PH", // Philippines
                "PK", // Pakistan
                "PL", // Poland
                "PM", // Saint Pierre and Miquelon
                "PN" 
               
              ],
            },
            success_url: `${process.env.NEXT_PUBLIC_API_URL}/confirm-payment`,
            cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/payment-failure`,
          });
           
        return  NextResponse.json({  id: session?.id  }, { status: 200 });}

    } catch (error) {
        return NextResponse.json({ error: "An error occurred while processing your payment" }, { status: 500 });
    }
}
