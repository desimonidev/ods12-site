import { useState } from "react";

// ── EDITE O LINK DO SEU FORMULÁRIO AQUI ──
const FORM_LINK = "https://forms.gle/SEU_LINK_AQUI";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&family=Lora:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #f4f0e8;
    --sand:  #eae4d5;
    --ink:   #1a1a12;
    --muted: #7a7260;
    --earth: #6b5c3e;
    --green: #2d6e4e;
    --green2:#1f4f38;
    --teal:  #3a8c6e;
    --accent:#d4a843;
    --text:  #27231a;
    --border: rgba(107,92,62,0.13);
  }

  html { scroll-behavior: smooth; }
  body { background: var(--cream); color: var(--text); font-family: 'Outfit', sans-serif; line-height: 1.65; }

  /* HERO */
  .hero {
    min-height: 100svh;
    display: flex; flex-direction: column;
    justify-content: center; align-items: flex-start;
    padding: 80px clamp(24px, 8vw, 120px);
    background: var(--ink);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 55% at 85% 40%, rgba(45,110,78,0.3) 0%, transparent 65%),
      radial-gradient(ellipse 50% 40% at 10% 90%, rgba(212,168,67,0.1) 0%, transparent 60%),
      repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.008) 50px, rgba(255,255,255,0.008) 51px);
    pointer-events: none;
  }
  .badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(45,110,78,0.2); border: 1px solid rgba(45,110,78,0.45);
    color: #80d4a8; font-size: 11px; font-weight: 500;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 7px 16px; border-radius: 100px; margin-bottom: 28px;
    animation: up 0.7s ease both;
  }
  .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #80d4a8; animation: pulse 2s ease infinite; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.6rem, 6.5vw, 5rem);
    font-weight: 700; line-height: 1.05;
    color: #f2ece0; max-width: 680px; margin-bottom: 20px;
    animation: up 0.8s 0.1s ease both;
  }
  .hero h1 em { font-style: italic; color: #80d4a8; }
  .hero-sub {
    font-family: 'Lora', serif; font-style: italic;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: #908070; max-width: 480px; margin-bottom: 44px;
    animation: up 0.9s 0.2s ease both;
  }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--green); color: #e0f5ec;
    font-size: 14px; font-weight: 500;
    text-decoration: none; padding: 14px 28px;
    border-radius: 100px;
    box-shadow: 0 4px 24px rgba(45,110,78,0.38);
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    animation: up 0.9s 0.3s ease both;
  }
  .btn-primary:hover { background: var(--green2); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(45,110,78,0.45); }
  .btn-primary:hover svg { transform: translateX(4px); }
  .btn-primary svg { transition: transform 0.2s; }
  .hero-num {
    position: absolute; right: clamp(24px,8vw,120px); bottom: 48px;
    font-family: 'Playfair Display', serif;
    font-size: clamp(120px,18vw,220px);
    font-weight: 700; font-style: italic;
    color: rgba(255,255,255,0.03); line-height: 1;
    user-select: none; pointer-events: none;
  }
  @keyframes up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

  /* LAYOUT */
  .sec { padding: clamp(56px,9vw,104px) clamp(24px,8vw,120px); }
  .sec-label {
    font-size: 11px; font-weight: 500; letter-spacing: 0.13em;
    text-transform: uppercase; color: var(--green);
    display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
  }
  .sec-label::after { content:''; width:28px; height:1px; background:var(--green); opacity:.5; }

  /* ODS 12 INFO */
  .info-sec { background: var(--cream); }
  .info-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 56px; align-items: start; max-width: 1080px;
  }
  .info-grid h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.9rem, 3.5vw, 2.8rem);
    font-weight: 400; line-height: 1.2;
    color: var(--ink); margin-bottom: 20px;
  }
  .info-grid h2 strong { font-weight: 700; color: var(--green); }
  .info-grid p {
    font-family: 'Lora', serif;
    font-size: 15px; color: var(--muted);
    line-height: 1.8; margin-bottom: 14px;
  }
  .pillars {
    display: flex; flex-direction: column; gap: 14px;
    position: sticky; top: 28px;
  }
  .pillar {
    background: var(--sand); border: 1px solid var(--border);
    border-radius: 14px; padding: 20px 22px;
    display: flex; gap: 14px; align-items: flex-start;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .pillar:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(27,23,14,0.08); }
  .pillar-icon {
    width: 40px; min-width: 40px; height: 40px;
    background: rgba(45,110,78,0.1); border-radius: 10px;
    display: flex; align-items: center; justify-content: center; font-size: 18px;
  }
  .pillar h4 { font-size: 14px; font-weight: 500; color: var(--ink); margin-bottom: 4px; }
  .pillar p { font-size: 13px; color: var(--muted); line-height: 1.55; }

  /* DADOS */
  .dados-sec { background: var(--sand); }
  .dados-sec h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 400; color: var(--ink);
    max-width: 560px; margin-bottom: 40px;
  }
  .stats-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px; max-width: 1080px;
  }
  .stat-card {
    background: var(--cream); border: 1px solid var(--border);
    border-radius: 16px; padding: 28px 24px;
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem; font-weight: 700;
    color: var(--green); line-height: 1; margin-bottom: 8px;
  }
  .stat-card p { font-size: 13.5px; color: var(--muted); line-height: 1.55; }

  /* OFICINAS */
  .oficinas-sec { background: var(--ink); }
  .oficinas-sec .sec-label { color: #80d4a8; }
  .oficinas-sec .sec-label::after { background: #80d4a8; }
  .oficinas-sec h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 400; color: #f2ece0;
    max-width: 540px; margin-bottom: 40px; line-height: 1.2;
  }
  .oficinas-sec h2 em { font-style: italic; color: #80d4a8; }
  .oficinas-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 18px; max-width: 1080px;
  }
  .oficina-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 28px 26px;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }
  .oficina-card:hover {
    border-color: rgba(128,212,168,0.3);
    background: rgba(45,110,78,0.1);
    transform: translateY(-3px);
  }
  .oficina-emoji { font-size: 28px; margin-bottom: 14px; }
  .oficina-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem; font-weight: 700;
    color: #f2ece0; margin-bottom: 8px;
  }
  .oficina-card p { font-size: 13.5px; color: #857a6e; line-height: 1.6; }
  .oficina-tag {
    display: inline-block; margin-top: 14px;
    background: rgba(45,110,78,0.2); border: 1px solid rgba(128,212,168,0.2);
    color: #80d4a8; font-size: 11px; font-weight: 500;
    padding: 4px 12px; border-radius: 100px;
  }

  /* CTA FINAL */
  .cta-sec {
    background: var(--cream);
    display: flex; flex-direction: column; align-items: center;
    text-align: center;
  }
  .cta-sec h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 700; font-style: italic;
    color: var(--ink); max-width: 560px;
    line-height: 1.1; margin-bottom: 14px;
  }
  .cta-sec > p {
    font-family: 'Lora', serif; font-style: italic;
    font-size: 15px; color: var(--muted);
    max-width: 440px; margin-bottom: 40px;
  }
  .consent-box {
    background: var(--sand); border: 1px solid var(--border);
    border-radius: 18px; padding: 32px 36px;
    max-width: 660px; width: 100%;
    text-align: left; margin-bottom: 24px;
  }
  .consent-box h3 {
    font-size: 14px; font-weight: 500; color: var(--earth);
    margin-bottom: 14px; display: flex; align-items: center; gap: 8px;
  }
  .consent-box ul { list-style: none; display: flex; flex-direction: column; gap: 9px; margin-bottom: 16px; }
  .consent-box ul li {
    display: flex; gap: 10px; align-items: flex-start;
    font-size: 13.5px; color: var(--muted); line-height: 1.55;
  }
  .consent-box ul li::before { content: '✓'; color: var(--green); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .lgpd-note { font-size: 11.5px; color: #a89b88; font-style: italic; }

  /* CHECKBOX CORRIGIDO — div simples, sem label+input */
  .check-row {
    display: flex; align-items: flex-start; gap: 14px;
    background: var(--sand); border: 1.5px solid var(--border);
    border-radius: 14px; padding: 16px 20px;
    cursor: pointer; max-width: 660px; width: 100%;
    text-align: left; margin-bottom: 28px;
    transition: border-color 0.2s, background 0.2s;
    user-select: none;
  }
  .check-row.on {
    border-color: rgba(45,110,78,0.55);
    background: rgba(45,110,78,0.06);
  }
  .check-box {
    width: 22px; min-width: 22px; height: 22px;
    border: 2px solid #bfb8a8; border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; color: transparent;
    transition: border-color 0.2s, background 0.2s, color 0.2s;
    margin-top: 1px;
  }
  .check-row.on .check-box {
    border-color: var(--green); background: var(--green); color: #fff;
  }
  .check-row span { font-size: 13.5px; color: var(--muted); line-height: 1.6; }
  .check-row.on span { color: var(--earth); }

  .btn-form {
    display: inline-flex; align-items: center; gap: 12px;
    background: var(--green); color: #e0f5ec;
    font-size: 15px; font-weight: 500;
    text-decoration: none; padding: 17px 40px;
    border-radius: 100px;
    box-shadow: 0 4px 24px rgba(45,110,78,0.3);
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  }
  .btn-form:not(.off):hover { background: var(--green2); transform: translateY(-2px); box-shadow: 0 10px 36px rgba(45,110,78,0.4); }
  .btn-form:not(.off):hover svg { transform: translateX(4px); }
  .btn-form svg { transition: transform 0.2s; }
  .btn-form.off { opacity: 0.35; cursor: not-allowed; pointer-events: none; }
  .hint { font-size: 12px; color: #b0a898; margin-top: 14px; }

  footer {
    background: var(--ink); text-align: center;
    padding: 28px 24px; font-size: 12px;
    color: #3a3328; font-family: 'Lora', serif; font-style: italic;
  }

  @media (max-width: 768px) {
    .info-grid, .pesq-grid { grid-template-columns: 1fr; gap: 32px; }
    .pillars { position: static; }
    .hero-num { display: none; }
    .consent-box { padding: 24px 20px; }
  }
`;

const pilares = [
  { icon: "♻️", title: "Reduzir o desperdício", desc: "Cortar pela metade o desperdício global de alimentos e reduzir resíduos sólidos até 2030." },
  { icon: "🌱", title: "Produção limpa", desc: "Incentivar práticas industriais sustentáveis e cadeias produtivas de baixo impacto ambiental." },
  { icon: "🛒", title: "Consumo consciente", desc: "Informar as pessoas sobre estilos de vida sustentáveis e escolhas de consumo responsáveis." },
  { icon: "📦", title: "Economia circular", desc: "Manter materiais em uso pelo maior tempo possível, reduzindo extração de novos recursos." },
];

const stats = [
  { num: "1/3", text: "de todos os alimentos produzidos no mundo é desperdiçado anualmente." },
  { num: "2×", text: "o ritmo de consumo atual ultrapassa o que a Terra consegue regenerar." },
  { num: "91%", text: "dos plásticos gerados nunca foram reciclados na história global." },
  { num: "R$61bi", text: "perdidos por ano no Brasil em alimentos jogados fora." },
];

const oficinas = [
  {
    emoji: "🧵",
    title: "Costura & Upcycling",
    desc: "Aprenda a transformar roupas antigas em peças novas. Pequenos reparos que evitam o descarte precoce.",
    tag: "Moda Consciente",
  },
  {
    emoji: "🍃",
    title: "Compostagem Doméstica",
    desc: "Como transformar restos de comida em adubo fértil dentro de casa, reduzindo o lixo orgânico.",
    tag: "Zero Resíduo",
  },
  {
    emoji: "🔧",
    title: "Repair Café",
    desc: "Oficina coletiva de conserto: eletrônicos, móveis e objetos quebrados ganham nova vida em vez de ir ao lixo.",
    tag: "Economia Circular",
  },
  {
    emoji: "🥗",
    title: "Cozinha Aproveitamento Total",
    desc: "Receitas criativas usando cascas, talos e sementes. Menos desperdício, mais sabor e economia.",
    tag: "Alimentação Sustentável",
  },
  {
    emoji: "🧴",
    title: "Produtos Naturais DIY",
    desc: "Faça em casa produtos de limpeza e higiene com ingredientes simples, reduzindo embalagens plásticas.",
    tag: "Menos Plástico",
  },
  {
    emoji: "🌿",
    title: "Horta Urbana",
    desc: "Como cultivar alimentos em pequenos espaços — vasos, sacadas e jardins — com baixo custo e impacto.",
    tag: "Consumo Local",
  },
];

export default function ODS12Page() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <style>{styles}</style>

      {/* HERO */}
      <section className="hero">
        <div className="badge"><span className="badge-dot" />ODS 12 · Agenda 2030</div>
        <h1>Consumo &<br /><em>Produção</em><br />Responsáveis</h1>
        <p className="hero-sub">Como nossos hábitos cotidianos moldam o futuro do planeta — e como podemos mudá-los.</p>
        <a href="#oficinas" className="btn-primary">
          Ver as oficinas
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <div className="hero-num" aria-hidden>12</div>
      </section>

      {/* O QUE É A ODS 12 */}
      <section className="sec info-sec">
        <div className="info-grid">
          <div>
            <div className="sec-label">Sobre a ODS 12</div>
            <h2>Por que repensar o que <strong>consumimos</strong>?</h2>
            <p>
              A ODS 12 pede uma transformação profunda na forma como produzimos e consumimos. Cada produto que compramos tem uma história — de recursos naturais extraídos, energia gasta e resíduos gerados.
            </p>
            <p>
              Consumir de forma responsável não é abrir mão de bem-estar: é fazer escolhas mais inteligentes, valorizar o que já existe e exigir que empresas operem com mais responsabilidade socioambiental.
            </p>
          </div>
          <div className="pillars">
            {pilares.map(p => (
              <div key={p.title} className="pillar">
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DADOS */}
      <section className="sec dados-sec">
        <div className="sec-label">Números que importam</div>
        <h2>O impacto do consumo<br />em dados</h2>
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.num} className="stat-card">
              <div className="stat-num">{s.num}</div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFICINAS */}
      <section id="oficinas" className="sec oficinas-sec">
        <div className="sec-label">Projeto prático</div>
        <h2>Oficinas para um<br /><em>consumo mais consciente</em></h2>
        <div className="oficinas-grid">
          {oficinas.map(o => (
            <div key={o.title} className="oficina-card">
              <div className="oficina-emoji">{o.emoji}</div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <span className="oficina-tag">{o.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FORMULÁRIO */}
      <section className="sec cta-sec">
        <h2>Participe da nossa pesquisa</h2>
        <p>Sua experiência com consumo consciente é essencial para este estudo.</p>

        <div className="consent-box">
          <h3>📋 Termo de Consentimento</h3>
          <ul>
            <li>Participação voluntária, sem custos ou obrigações.</li>
            <li>Dados usados exclusivamente para fins acadêmicos, de forma anônima e agregada.</li>
            <li>Você pode desistir a qualquer momento sem qualquer prejuízo.</li>
            <li>Em conformidade com a LGPD (Lei nº 13.709/2018).</li>
          </ul>
          <p className="lgpd-note">Ao responder, você confirma ter 18 anos ou mais e concorda com os termos acima.</p>
        </div>

        {/* CHECKBOX CORRIGIDO */}
        <div className={`check-row${agreed ? " on" : ""}`} onClick={() => setAgreed(v => !v)}>
          <div className="check-box">{agreed ? "✓" : ""}</div>
          <span>Li e concordo com o Termo de Consentimento. Autorizo o uso dos meus dados para os fins desta pesquisa.</span>
        </div>

        <a
          href={agreed ? FORM_LINK : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-form${!agreed ? " off" : ""}`}
        >
          Acessar o formulário
          <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {!agreed && <p className="hint">Aceite o termo acima para liberar o acesso ao formulário.</p>}
      </section>

      <footer>Pesquisa ODS 12 · Consumo e Produção Responsáveis · Agenda 2030</footer>
    </>
  );
}