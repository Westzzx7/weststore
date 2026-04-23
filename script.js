// ============================================================
//  WESTSTORE — script.js
// ============================================================

// ── Products data ──────────────────────────────────────────
const products = [
    // STREAMING
    { id:6,  name:"Netflix Premium – 30 dias",        category:"streaming", icon:"🎬", img:"images/Gemini_Generated_Image_jzifk1jzifk1jzif.png", badge:"hot",  badgeText:"Hot",  price:19.90,  oldPrice:45.90,  desc:"Acesso Netflix Premium com 4 telas simultâneas e qualidade 4K Ultra HD.", features:["4 telas simultâneas","Qualidade 4K Ultra HD","Todos os conteúdos","Funciona em todos dispositivos","Renovação disponível"] },
    { id:7,  name:"HBO Max – 30 dias",                category:"streaming", icon:"📺", img:"images/HBO.jpg", badge:null,   badgeText:null,   price:17.90,  oldPrice:34.90,  desc:"Acesso HBO Max com séries exclusivas, filmes e conteúdo DC.", features:["Séries HBO exclusivas","Filmes DC e Warner","Qualidade Full HD","2 telas simultâneas","Suporte incluso"] },
    { id:8,  name:"Disney+ – 30 dias",                category:"streaming", icon:"🏰", img:"images/Disney.jfif", badge:"new",  badgeText:"Novo", price:15.90,  oldPrice:27.90,  desc:"Acesso Disney+ com Marvel, Star Wars, Pixar e muito mais.", features:["Marvel completo","Star Wars","Pixar e Disney clássicos","National Geographic","4 telas simultâneas"] },
    { id:9,  name:"Spotify Premium – 30 dias",        category:"streaming", icon:"🎵", img:"images/spotify.jfif", badge:null,   badgeText:null,   price:12.90,  oldPrice:21.90,  desc:"Spotify Premium sem anúncios, download offline e qualidade máxima.", features:["Sem anúncios","Download offline","Qualidade máxima","Pular músicas ilimitado","Funciona no celular"] },
    // PC
    { id:11, name:"Otimização PC – Básica",           category:"pc",        icon:"⚡", img:"images/Otimiza%C3%A7%C3%A3o%20PC%20%E2%80%93%20B%C3%A1sica.jfif", badge:null,   badgeText:null,   price:29.90,  oldPrice:null,   desc:"Limpeza de arquivos temporários, otimização de inicialização e ajustes de desempenho.", features:["Limpeza completa","Otimização de boot","Remoção de vírus","Relatório detalhado","Suporte pós-serviço"] },
    { id:12, name:"Otimização PC – Gamer",            category:"pc",        icon:"🖥️", img:"images/Otimiza%C3%A7%C3%A3o%20PC%20%E2%80%93%20Gamer.jfif", badge:"hot",  badgeText:"Hot",  price:59.90,  oldPrice:89.90,  desc:"Otimização completa focada em jogos: FPS, latência e desempenho máximo.", features:["Boost de FPS garantido","Redução de latência","Configuração de rede","Overclock seguro","Suporte 7 dias"] },
    // INTELIGÊNCIA ARTIFICIAL
    { id:25, name:"Chat GPT Plus",                        category:"ia",        icon:"🧠", img:"images/Chat%20GPT%20plus.jfif",                          badge:"hot",  badgeText:"Hot",  price:11.99,  oldPrice:null,   desc:"Acesso ao ChatGPT Plus com GPT-4, respostas mais rápidas e recursos exclusivos.", features:["Acesso ao GPT-4","Respostas prioritárias","Plugins disponíveis","Sem limite de uso","Entrega imediata"] },
    { id:26, name:"Super Grok",                           category:"ia",        icon:"⚡", img:"images/Super%20Grok.jfif",                                badge:"new",  badgeText:"Novo", price:8.99,   oldPrice:null,   desc:"Acesso ao Super Grok com todos os recursos premium desbloqueados.", features:["Acesso completo","Respostas avançadas","Sem restrições","Alta velocidade","Entrega imediata"] },
    { id:27, name:"Perplexity AI",                        category:"ia",        icon:"🔍", img:"images/Perplexity%20AI.jfif",                             badge:null,   badgeText:null,   price:9.99,   oldPrice:null,   desc:"Perplexity AI premium com pesquisas ilimitadas e respostas com fontes verificadas.", features:["Pesquisas ilimitadas","Fontes verificadas","Modo Pro ativo","Respostas detalhadas","Entrega imediata"] },
    { id:28, name:"Leonardo AI – Plano Essential",        category:"ia",        icon:"🎨", img:"images/Leonardo%20AI%20%E2%80%93%20Plano%20Essential.jfif", badge:null,   badgeText:null,   price:10.99,  oldPrice:null,   desc:"Leonardo AI no plano Essential para geração de imagens com IA de alta qualidade.", features:["Geração de imagens IA","Plano Essential","Alta resolução","Modelos exclusivos","Entrega imediata"] },
    { id:29, name:"Gemini Enterprise",                    category:"ia",        icon:"💎", img:"images/Gemini%20Enterprise.jfif",                         badge:"hot",  badgeText:"Hot",  price:5.99,   oldPrice:null,   desc:"Acesso ao Gemini Enterprise do Google com todos os recursos avançados liberados.", features:["Gemini Enterprise","Recursos avançados","Integração Google","Alta performance","Entrega imediata"] },
    // FIVE M
    { id:24, name:"Pack PaintBall + Mod Som",             category:"fivem",     icon:"🎯", img:"images/Pack%20paintball.jpg", badge:"new",  badgeText:"Novo", price:10.00,  oldPrice:null,   desc:"Pack completo com PaintBall e Mod de Som para FiveM. Instalação simples e suporte incluso.", features:["PaintBall completo","Mod de Som incluso","Compatível com FiveM","Fácil instalação","Suporte pós-venda"] },
    // EDIÇÃO PREMIUM
    { id:21, name:"Canva PRO",                            category:"edicao",    icon:"🎨", img:"images/Canva%20PRO.jfif", badge:"hot",  badgeText:"Hot",  price:5.00,   oldPrice:null,   desc:"Acesso ao Canva PRO com todos os recursos premium desbloqueados.", features:["Todos os templates PRO","Remoção de fundo ilimitada","Exportação sem marca d'água","Armazenamento em nuvem","Entrega imediata"] },
    { id:22, name:"CapCut PRO – 30/35 dias",              category:"edicao",    icon:"🎬", img:"images/capcut.jfif", badge:"new",  badgeText:"Novo", price:9.50,   oldPrice:null,   desc:"CapCut PRO por 30 a 35 dias com todos os efeitos e ferramentas desbloqueadas.", features:["Efeitos PRO desbloqueados","Sem marca d'água","Filtros exclusivos","Edição avançada","Entrega imediata"] },
    { id:23, name:"Alight Motion PRO – 1 Ano Individual", category:"edicao",    icon:"✨", img:"images/ALIGHT%20MOTION%20PRO.jfif", badge:"new",  badgeText:"Novo", price:19.00,  oldPrice:null,   desc:"Alight Motion PRO por 1 ano no plano individual com todos os recursos liberados.", features:["Plano individual 1 ano","Todos os efeitos desbloqueados","Exportação em alta qualidade","Sem marca d'água","Suporte incluso"] },
];

// ── State ──────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('weststore_cart') || '[]');
let currentFilter = 'todos';
let currentSearch  = '';

// ── Helpers ────────────────────────────────────────────────
const fmt = n => 'R$ ' + n.toFixed(2).replace('.', ',');

function getCategoryLabel(cat) {
    const map = { jogos:'Contas de Jogos', streaming:'Streaming', pc:'Otimização PC', software:'Softwares', outros:'Outros', edicao:'Edição Premium', fivem:'Five M', ia:'Inteligência Artificial Premium' };
    return map[cat] || cat;
}

// ── Render products ────────────────────────────────────────
function renderProducts() {
    const grid  = document.getElementById('productsGrid');
    const empty = document.getElementById('emptyState');

    const list = products.filter(p => {
        const matchCat    = currentFilter === 'todos' || p.category === currentFilter;
        const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            p.desc.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
    });

    if (!list.length) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    grid.innerHTML = list.map(p => `
        <article class="product-card" onclick="openModal(${p.id})" role="button" tabindex="0" aria-label="${p.name}">
            ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badgeText}</span>` : ''}
            <div class="product-img-wrap">
                ${p.img
                    ? `<img class="product-img" src="${p.img}" alt="${p.name}" style="height:160px;object-fit:cover;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
                    : ''}
                <div class="product-img" style="background:var(--card-2);display:${p.img ? 'none' : 'flex'};align-items:center;justify-content:center;font-size:3.5rem;height:160px;">
                    ${p.icon}
                </div>
            </div>
            <div class="product-body">
                <div class="product-category">${getCategoryLabel(p.category)}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-desc">${p.desc}</div>
                <div class="product-footer">
                    <div class="product-price-wrap">
                        ${p.oldPrice ? `<span class="product-price-old">${fmt(p.oldPrice)}</span>` : ''}
                        <span class="product-price">${fmt(p.price)}</span>
                    </div>
                    <div class="product-btns">
                        <button class="btn-buy" onclick="event.stopPropagation(); buyNow(${p.id})" aria-label="Comprar ${p.name}">
                            Comprar
                        </button>
                        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})" aria-label="Adicionar ${p.name} ao carrinho" title="Adicionar ao carrinho">
                            🛒
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    // Keyboard support for cards
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// ── Modal ──────────────────────────────────────────────────
function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modalContent').innerHTML = `
        <div class="modal-product">
            ${p.img
                ? `<img src="${p.img}" alt="${p.name}" style="width:100%;border-radius:12px;margin-bottom:24px;max-height:220px;object-fit:cover;">`
                : `<div style="background:var(--card-2);border-radius:12px;height:200px;display:flex;align-items:center;justify-content:center;font-size:5rem;margin-bottom:24px;">${p.icon}</div>`
            }
            <div class="modal-product-category">${getCategoryLabel(p.category)}</div>
            <div class="modal-product-name">${p.name}</div>
            <div class="modal-product-desc">${p.desc}</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
                ${p.features.map(f => `
                    <li style="display:flex;align-items:center;gap:10px;font-size:13px;color:var(--text-dim);">
                        <span style="color:var(--green);font-weight:700;flex-shrink:0;">✓</span>${f}
                    </li>
                `).join('')}
            </ul>
            <div class="modal-product-footer">
                <div>
                    ${p.oldPrice ? `<div style="font-size:13px;color:var(--text-muted);text-decoration:line-through;margin-bottom:2px;">${fmt(p.oldPrice)}</div>` : ''}
                    <div class="modal-product-price">${fmt(p.price)}</div>
                </div>
                <button class="btn-add-cart" style="padding:14px 28px;font-size:15px;" onclick="addToCart(${p.id}); closeModal()">
                    🛒 Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ── Cart ───────────────────────────────────────────────────
// ── Buy Now ────────────────────────────────────────────────
function buyNow(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const msg = encodeURIComponent(`Olá! Quero comprar:\n\n${p.name}\nValor: ${fmt(p.price)}`);
    window.open(`https://wa.me/5571982616245?text=${msg}`, '_blank');
}

function addToCart(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const existing = cart.find(x => x.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: p.id, name: p.name, price: p.price, icon: p.icon, img: p.img || null, qty: 1 });
    }

    saveCart();
    renderCart();
    showToast(`"${p.name}" adicionado ao carrinho`);
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('weststore_cart', JSON.stringify(cart));
}

function renderCart() {
    const count  = cart.reduce((s, x) => s + x.qty, 0);
    const badge  = document.getElementById('cartCount');
    const body   = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');

    badge.textContent = count;

    if (!cart.length) {
        body.innerHTML = `
            <div class="cart-empty-state">
                <div class="ces-icon">◌</div>
                <p>Carrinho vazio</p>
                <span>Adicione produtos para continuar</span>
            </div>`;
        footer.style.display = 'none';
        return;
    }

    body.innerHTML = cart.map(item => `
        <div class="cart-item">
            ${item.img
                ? `<img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
                : ''}
            <div class="cart-item-img" style="display:${item.img ? 'none' : 'flex'};align-items:center;justify-content:center;font-size:1.8rem;background:var(--card-2);">
                ${item.icon}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${fmt(item.price * item.qty)}${item.qty > 1 ? ` <span style="font-size:11px;color:var(--text-muted);font-weight:400;">(${item.qty}x)</span>` : ''}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remover ${item.name}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    document.getElementById('cartTotal').textContent = fmt(total);
    footer.style.display = 'block';
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ── Toast ──────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Header scroll ──────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();

    // Category filter
    document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts();
            document.getElementById('produtos').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', e => {
        currentSearch = e.target.value;
        renderProducts();
    });

    // Cart open/close
    document.getElementById('btnCart').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modalOverlay')) closeModal();
    });

    // Checkout → WhatsApp
    document.getElementById('btnCheckout').addEventListener('click', () => {
        if (!cart.length) return;
        const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
        const items = cart.map(x => `${x.qty}x ${x.name}`).join('\n');
        const msg   = encodeURIComponent(`Olá! Quero finalizar meu pedido:\n\n${items}\n\nTotal: ${fmt(total)}`);
        window.open(`https://wa.me/5571982616245?text=${msg}`, '_blank');
    });

    // Mobile menu
    const btnMenu = document.getElementById('btnMenu');
    const nav     = document.getElementById('nav');

    btnMenu.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        btnMenu.setAttribute('aria-expanded', open);
        // Animate hamburger lines
        const spans = btnMenu.querySelectorAll('span');
        if (open) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity   = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity   = '';
            spans[2].style.transform = '';
        }
    });

    nav.querySelectorAll('.nav-link').forEach(a => {
        a.addEventListener('click', () => {
            nav.classList.remove('open');
            btnMenu.setAttribute('aria-expanded', 'false');
            const spans = btnMenu.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity   = '';
            spans[2].style.transform = '';
        });
    });

    // ESC key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
            closeCart();
            nav.classList.remove('open');
        }
    });
});


// ============================================================
//  PARTÍCULAS ROXAS
// ============================================================
(function () {
    const canvas = document.getElementById('particlesCanvas');
    const ctx    = canvas.getContext('2d');

    const COLORS = [
        'rgba(124, 92, 252, ALPHA)',
        'rgba(167,139,250, ALPHA)',
        'rgba(196,181,253, ALPHA)',
        'rgba(91, 33, 182, ALPHA)',
    ];

    let particles = [];
    let W, H;

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = document.documentElement.scrollHeight;
    }

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    function createParticle() {
        const size  = randomBetween(1.5, 4);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
            x:      randomBetween(0, W),
            y:      randomBetween(-H * 0.1, 0),
            size,
            speedY: randomBetween(0.4, 1.4),
            speedX: randomBetween(-0.3, 0.3),
            alpha:  randomBetween(0.3, 0.85),
            color,
            wobble: randomBetween(0, Math.PI * 2),
            wobbleSpeed: randomBetween(0.005, 0.02),
        };
    }

    function initParticles(count) {
        particles = [];
        for (let i = 0; i < count; i++) {
            const p = createParticle();
            p.y = randomBetween(0, H); // espalha pelo site todo no início
            particles.push(p);
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.wobble    += p.wobbleSpeed;
            p.x         += p.speedX + Math.sin(p.wobble) * 0.4;
            p.y         += p.speedY;

            // Reinicia quando sai pela base
            if (p.y > H + 10) {
                particles[i] = createParticle();
                continue;
            }

            const colorStr = p.color.replace('ALPHA', p.alpha.toFixed(2));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = colorStr;
            ctx.fill();
        }

        requestAnimationFrame(draw);
    }

    // Recalcula altura quando o DOM muda (scroll, resize)
    function refresh() {
        const newH = document.documentElement.scrollHeight;
        if (newH !== H) {
            H = canvas.height = newH;
        }
    }

    window.addEventListener('resize', () => {
        resize();
        initParticles(120);
    });

    // Observa mudanças de altura da página
    const ro = new ResizeObserver(refresh);
    ro.observe(document.body);

    resize();
    initParticles(120);
    draw();
})();

