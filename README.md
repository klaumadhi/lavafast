# LavaFast — Website Zyrtar

Faqe interneti me një faqe për LavaFast, lavanderia industriale me e madhe ne Shqiperi.

## 🚀 Si ta nisësh

```bash
npm install
npm run dev
```
Hap http://localhost:5173

## 📦 Build për prodhim
```bash
npm run build
```

## 📬 Lidh Formularin e Kontaktit
1. Shko te [formspree.io](https://formspree.io) dhe krijo llogari falas
2. Krijo një formë të re dhe kopjo ID-në (p.sh. `xrgvkpqz`)
3. Në `src/components/Kontakt.tsx`, zëvendëso:
   `YOUR_FORMSPREE_ID` → ID-ja jote reale

## 🚢 Deploy falas te Vercel
```bash
npm install -g vercel
vercel
```

## 🎨 Si të personalizosh
- **Numri i telefonit**: Kërko `+355 00 000 0000` dhe zëvendëso
- **Email**: Kërko `info@lavafast.al` dhe zëvendëso
- **Domain**: Zëvendëso `lavafast.al` me domain-in tënd real
- **Imazhet**: Gjenden në `public/images/`
