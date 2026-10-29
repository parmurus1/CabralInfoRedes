# Cabral Inforedes · site vitrine

Site de uma página para a Cabral Inforedes, que oferece serviços de tecnologia e informática em São Paulo capital. Feito em HTML, CSS e JS puros: não precisa de instalação nem de build.

## Ver no computador

Abra um servidor local na pasta do projeto (as fontes não carregam se o arquivo for aberto direto com `file://`):

```bash
python3 -m http.server 8000
```

Depois acesse http://localhost:8000.

## Publicar (grátis)

**GitHub Pages:** no repositório, abra *Settings → Pages*, escolha *Deploy from a branch*, selecione o branch e a pasta `/ (root)` e salve. O site fica em `https://<usuario>.github.io/<repositorio>/`.

**Netlify:** arraste a pasta do projeto para https://app.netlify.com/drop.

## O que falta preencher

- [ ] **Fotos dos trabalhos.** Os três espaços "Foto em breve" na seção *Na bancada* (`index.html`, procure `photo-slot`) devem virar fotos reais. Coloque as fotos em `assets/trabalhos/` e troque cada `<div class="photo-slot">…</div>` por:
      `<img src="assets/trabalhos/foto.jpg" alt="Descrição do trabalho" width="800" height="600" loading="lazy">`
- [ ] **Como usar o desconto de 10%.** O texto atual diz: "Diga que veio pelo site ou pelo folheto ao pedir o orçamento no WhatsApp." Confirme se é assim que você quer aplicar o desconto.
- [ ] **Logo.** O logo foi redesenhado em vetor (SVG) a partir da imagem do Instagram. Se você tiver o arquivo original em alta resolução, me mande para eu comparar.
- [ ] **Opcional:** endereço, horário, avaliações de clientes, anos de experiência e garantia. Nada disso foi inventado. Quando você tiver essas informações, elas podem ser adicionadas.

## Estrutura

- `index.html`: a página completa, com as ilustrações em SVG embutidas
- `styles.css`: o visual
- `main.js`: o destaque das peças na Fig. 1, o botão Montar/Desmontar e a barra fixa do WhatsApp no celular
- `assets/fonts/`: Archivo e Atkinson Hyperlegible (licença SIL OFL, incluída)
- `PRODUCT.md` / `DESIGN.md`: o registro do produto e do sistema visual
