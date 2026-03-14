.asild-header {
    --asild-nav-bg: rgba(251, 251, 253, 0.8);
    --asild-nav-text: #1D1D1B;
    --asild-nav-text-hover: #E30613;
    --asild-nav-height: 44px;
    --asild-mobile-nav-height: 48px;
    --asild-mega-bg: var(--asild-nav-bg);
    --asild-desktop-content-inset: 11px;

    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: var(--asild-nav-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    box-sizing: border-box;
}

.asild-header *, .asild-header *::before, .asild-header *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

.asild-header .asild-global-nav {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 22px 0 0;
    height: var(--asild-nav-height);
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.asild-header .asild-nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.asild-header .asild-desktop-list {
    display: flex;
    list-style: none;
    height: 100%;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    gap: 22px;
}

.asild-header .asild-search {
    margin-left: auto;
}

.asild-header .asild-nav-item > a {
    display: flex;
    align-items: center;
    height: var(--asild-nav-height);
    padding: 0 11px;
    color: var(--asild-nav-text);
    text-decoration: none;
    font-size: 12px;
    letter-spacing: -0.01em;
    font-weight: 400;
    transition: color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    white-space: nowrap;
    opacity: 0.8;
}

.asild-header .asild-nav-item > a:hover {
    color: var(--asild-nav-text-hover);
    opacity: 1;
}

.asild-header .asild-mobile-only {
    display: none;
}

.asild-header .asild-nav-icons {
    display: flex;
    align-items: center;
    gap: 16px;
}

.asild-header .asild-bag-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.asild-header .asild-bag-badge {
    position: absolute;
    bottom: 8px;
    right: -4px;
    background: #E30613;
    color: #fff;
    font-size: 8px;
    font-weight: 700;
    min-width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    letter-spacing: 0;
    box-shadow: 0 0 0 1px var(--asild-nav-bg);
}

.asild-header .asild-mega-menu-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--asild-mega-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    overflow: hidden;
    height: 0;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}

.asild-header.mega-open {
    background: var(--asild-nav-bg);
}

.asild-header .asild-mega-menu-content {
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    opacity: 0;
    transition: opacity 0.3s ease;
    visibility: hidden;
}

.asild-header.mega-open .asild-mega-menu-content {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease 0.1s;
}

.asild-header .asild-mega-section {
    padding: 30px 22px 40px var(--asild-desktop-content-inset);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(8px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
}
.asild-header .asild-mega-section.active {
    position: relative;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
    transition: opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, visibility 0s;
}

.asild-header .asild-mega-grid {
    display: flex;
    gap: 80px;
}

.asild-header .asild-mega-title {
    font-size: 12px;
    color: #86868b;
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: -0.01em;
}

.asild-header .asild-mega-list {
    list-style: none;
    margin-bottom: 24px;
}

.asild-header .asild-mega-list a {
    color: #1D1D1B;
    text-decoration: none;
    transition: color 0.2s ease;
    letter-spacing: -0.01em;
}

.asild-header .asild-mega-list a:hover {
    color: #E30613;
}

.asild-header .asild-mega-list-main li { margin-bottom: 12px; }
.asild-header .asild-mega-list-main a {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
}

.asild-header .asild-mega-list-sub li { margin-bottom: 8px; }
.asild-header .asild-mega-list-sub a {
    font-size: 12px;
    font-weight: 600;
}

.asild-header .asild-mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    visibility: hidden;
    pointer-events: none;
    padding: 60px 28px 40px 44px;
    z-index: 9998;
    box-sizing: border-box;
}

.asild-header .asild-mobile-menu::before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(251, 251, 253, 0.98);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    transform: translateY(-100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
}

.asild-header.mobile-open .asild-mobile-menu,
.asild-header.mobile-closing .asild-mobile-menu {
    visibility: visible;
}

.asild-header.mobile-open .asild-mobile-menu {
    pointer-events: auto;
}

.asild-header.mobile-open .asild-mobile-menu::before {
    transform: translateY(0);
}

.asild-header.mobile-closing .asild-mobile-menu::before {
    transform: translateY(-100%);
}

.asild-header .asild-mobile-main-list {
    list-style: none;
    padding-top: 0;
    margin-top: 0;
    position: relative;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.22s ease, visibility 0s linear 0.22s;
}

.asild-header .asild-mobile-main-list a {
    color: #1D1D1B;
    text-decoration: none;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 600;
    display: block;
    padding: 16px 0;
    transition: color 0.2s ease;
}

.asild-header.mobile-open .asild-mobile-main-list,
.asild-header.mobile-closing .asild-mobile-main-list {
    visibility: visible;
}

.asild-header.mobile-open .asild-mobile-main-list {
    opacity: 1;
}

.asild-header .asild-mobile-main-list a:hover {
    color: #E30613;
}

.asild-header .asild-mobile-menu-close {
    position: absolute;
    top: 18px;
    right: 22px;
    background: rgba(120, 120, 128, 0.12);
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    color: #1D1D1B;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 0.25s cubic-bezier(0.25, 0.1, 0.25, 1),
                color 0.2s ease,
                transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    line-height: 1;
    padding: 0;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
}

.asild-header .asild-mobile-menu-close:hover {
    background: rgba(227, 6, 19, 0.10);
    color: #E30613;
    transform: scale(1.08);
}

.asild-header .asild-mobile-menu-close:active {
    transform: scale(0.94);
    background: rgba(227, 6, 19, 0.18);
}

.asild-header .asild-menu-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
}

.asild-header .asild-menu-lines {
    position: relative;
    width: 16px;
    height: 10px;
}

.asild-header .asild-menu-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: var(--asild-nav-text);
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    border-radius: 2px;
}

.asild-header .asild-menu-line-top { top: 1px; }
.asild-header .asild-menu-line-bottom { top: 7px; }

.asild-header.mobile-open .asild-menu-line-top,
.asild-header.cart-open .asild-menu-line-top,
.asild-header.search-open .asild-menu-line-top {
    transform: rotate(45deg);
    top: 4px;
}
.asild-header.mobile-open .asild-menu-line-bottom,
.asild-header.cart-open .asild-menu-line-bottom,
.asild-header.search-open .asild-menu-line-bottom {
    transform: rotate(-45deg);
    top: 4px;
}

.asild-header .asild-search-panel {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--asild-mega-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    overflow: hidden;
    height: 0;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
    border-bottom: none;
}

.asild-header.search-open .asild-search-panel {
    border-top: none;
}

.asild-header .asild-search-panel-close {
    display: none;
    position: absolute;
    top: 0;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 28px;
    font-weight: 300;
    color: #1D1D1B;
    width: 24px;
    height: var(--asild-mobile-nav-height, 48px);
    align-items: center;
    justify-content: center;
    border-radius: 0;
    padding: 0;
    line-height: 1;
    z-index: 1;
    transition: color 0.2s ease, opacity 0.2s;
    opacity: 0.8;
}

.asild-header .asild-search-panel-close:hover {
    color: #E30613;
    opacity: 1;
}

.asild-header .asild-search-content {
    max-width: 1024px;
    margin: 0 auto;
    padding: 30px 22px 40px var(--asild-desktop-content-inset);
    position: relative;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, visibility 0s;
}

.asild-header.search-open .asild-search-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.asild-header .asild-search-input-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
}

.asild-header .asild-search-input-wrapper svg {
    color: #1D1D1B;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
}

.asild-header .asild-search-input {
    width: 100%;
    background: transparent;
    border: none;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    color: #1D1D1B;
    outline: none;
    font-family: inherit;
    padding: 0;
    letter-spacing: -0.01em;
}

.asild-header .asild-search-input::placeholder {
    color: #6e6e73;
    font-weight: 600;
}

.asild-header .asild-search-results {
    display: none;
    margin-bottom: 28px;
}

.asild-header .asild-search-results.has-results {
    display: block;
}

.asild-header .asild-search-results-title {
    font-size: 12px;
    color: #1D1D1B;
    margin-bottom: 12px;
    font-weight: 400;
    letter-spacing: -0.01em;
}

.asild-header .asild-search-results-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 24px;
}

.asild-header .asild-search-results-item {
    min-width: 0;
}

.asild-header .asild-search-result-link {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    text-decoration: none;
    color: #1D1D1B;
}

.asild-header .asild-search-result-image {
    width: 72px;
    height: 72px;
    border-radius: 12px;
    overflow: hidden;
    background: #f5f5f7;
}

.asild-header .asild-search-result-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.asild-header .asild-search-result-name {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.35;
    margin-bottom: 4px;
}

.asild-header .asild-search-result-price {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
}

.asild-header .asild-search-title {
    font-size: 12px;
    color: #1D1D1B;
    margin-bottom: 12px;
    font-weight: 400;
    letter-spacing: -0.01em;
}

.asild-header .asild-search-links {
    list-style: none;
}

.asild-header .asild-search-links li {
    margin-bottom: 10px;
}

.asild-header .asild-search-links a {
    display: inline-flex;
    align-items: center;
    color: #1D1D1B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s ease;
    letter-spacing: -0.01em;
}

.asild-header .asild-search-links a:hover {
    color: #E30613;
}

.asild-header .asild-search-links a svg {
    margin-right: 12px;
    color: #1D1D1B;
    transition: color 0.2s;
    width: 14px;
    height: 14px;
}

.asild-header .asild-search-links a:hover svg {
    color: #E30613;
}

.asild-header .asild-cart-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--asild-mega-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: none;
    overflow: hidden;
    height: 0;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 3;
}

.asild-header.cart-open .asild-cart-dropdown {
    border-top: none;
}

.asild-header .asild-cart-content {
    max-width: 1024px;
    margin: 0 auto;
    padding: 30px 22px 50px var(--asild-desktop-content-inset);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, visibility 0s;
}

.asild-header.cart-open .asild-cart-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.asild-header .asild-cart-header {
    margin-bottom: 24px;
}

.asild-header .asild-cart-checkout-btn-desktop {
    display: none;
}

.asild-header .asild-cart-header h2 {
    font-size: 28px;
    font-weight: 600;
    color: #1D1D1B;
    letter-spacing: -0.005em;
}

.asild-header .asild-cart-checkout-btn {
    background: #E30613;
    color: white;
    font-size: 14px;
    font-weight: 400;
    padding: 8px 16px;
    border-radius: 980px;
    text-decoration: none;
    transition: background 0.2s;
    display: inline-block;
    margin-bottom: 30px;
}

.asild-header .asild-cart-checkout-btn:hover {
    background: #c30410;
}

.asild-header .asild-cart-items {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: none;
}

.asild-header .asild-cart-item {
    display: flex;
    gap: 20px;
    align-items: center;
}

.asild-header .asild-cart-item-image {
    flex-shrink: 0;
}

.asild-header .asild-cart-item-info a {
    font-size: 14px;
    font-weight: 600;
    color: #1D1D1B;
    text-decoration: none;
    line-height: 1.4;
    transition: color 0.2s;
}

.asild-header .asild-cart-item-info a:hover {
    color: #E30613;
}

.asild-header .asild-cart-profile h3 {
    font-size: 14px;
    color: #1D1D1B;
    font-weight: 600;
    margin-bottom: 16px;
}

.asild-header .asild-cart-profile-links {
    list-style: none;
}

.asild-header .asild-cart-profile-links li {
    margin-bottom: 12px;
}

.asild-header .asild-cart-profile-links a {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: #1D1D1B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s;
}

.asild-header .asild-cart-profile-links a svg {
    color: #1D1D1B;
    transition: color 0.2s;
}

.asild-header .asild-cart-profile-links a:hover {
    color: #E30613;
}

.asild-header .asild-cart-profile-links a:hover svg {
    color: #E30613;
}

.asild-global-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

.asild-header.search-open ~ .asild-global-backdrop,
.asild-header.mega-open ~ .asild-global-backdrop,
.asild-header.cart-open ~ .asild-global-backdrop,
.asild-header.profile-open ~ .asild-global-backdrop {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.asild-header .asild-profile-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--asild-mega-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: none;
    overflow: hidden;
    height: 0;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 3;
}

.asild-header.profile-open .asild-profile-dropdown {
    border-top: none;
}

.asild-header .asild-profile-content {
    max-width: 1024px;
    margin: 0 auto;
    padding: 30px 22px 50px var(--asild-desktop-content-inset);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s, visibility 0s;
}

.asild-header.profile-open .asild-profile-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.asild-header .asild-profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: none;
}

.asild-header .asild-profile-header h2 {
    font-size: 28px;
    font-weight: 600;
    color: #1D1D1B;
    letter-spacing: -0.005em;
}

.asild-header .asild-profile-intro {
    font-size: 14px;
    line-height: 1.5;
    color: #6e6e73;
    margin-bottom: 22px;
    max-width: 480px;
}

.asild-header .asild-profile-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}

.asild-header .asild-mobile-panel-close {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    color: #1D1D1B;
    width: 24px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    transition: color 0.2s ease, opacity 0.2s;
    padding: 0;
    line-height: 1;
    flex-shrink: 0;
    opacity: 0.8;
}

.asild-header .asild-mobile-panel-close:hover {
    color: #E30613;
    opacity: 1;
    background: none;
}

@media (min-width: 834px) {
    .asild-header .asild-cart-content {
        position: relative;
        padding: 30px 22px 36px var(--asild-desktop-content-inset);
    }

    .asild-header .asild-profile-content {
        padding: 30px 22px 36px var(--asild-desktop-content-inset);
    }

    .asild-header .asild-cart-header,
    .asild-header .asild-profile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        padding-bottom: 0;
    }

    .asild-header .asild-cart-header h2,
    .asild-header .asild-profile-header h2 {
        font-size: 22px;
        line-height: 1.2;
        font-weight: 600;
    }

    .asild-header .asild-cart-checkout-btn-desktop {
        display: inline-block;
    }

    .asild-header .asild-cart-checkout-btn-mobile {
        display: none;
    }

    .asild-header .asild-cart-header .asild-cart-checkout-btn,
    .asild-header .asild-profile-header .asild-cart-checkout-btn {
        position: static;
        margin-bottom: 0;
        padding: 10px 18px;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.2;
        background: #E30613;
    }

    .asild-header .asild-cart-header .asild-cart-checkout-btn:hover,
    .asild-header .asild-profile-header .asild-cart-checkout-btn:hover {
        background: #c30410;
    }

    .asild-header .asild-cart-items {
        margin-bottom: 28px;
        padding-bottom: 0;
        max-width: 520px;
    }

    .asild-header .asild-cart-item {
        gap: 16px;
        align-items: flex-start;
    }

    .asild-header .asild-cart-item-info {
        padding-top: 10px;
    }

    .asild-header .asild-cart-item-info a {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.35;
    }

    .asild-header .asild-cart-profile h3 {
        font-size: 14px;
        color: #6e6e73;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .asild-header .asild-cart-profile-links li {
        margin-bottom: 10px;
    }

    .asild-header .asild-cart-profile-links a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.3;
    }

    .asild-header .asild-cart-profile-links a svg {
        width: 13px;
        height: 13px;
        color: #6e6e73;
        flex-shrink: 0;
    }

    .asild-header .asild-profile-intro {
        font-size: 14px;
        margin-bottom: 24px;
        max-width: 560px;
    }

    .asild-header .asild-profile-grid {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 48px;
        align-items: start;
        max-width: 760px;
    }
}

   @media (max-width: 833px) {
    .asild-header .asild-desktop-only,
    .asild-header .asild-mega-menu-wrapper {
        display: none !important;
    }

    .asild-header .asild-mobile-only {
        display: flex;
    }

    .asild-header .asild-global-nav {
        height: var(--asild-mobile-nav-height);
        padding: 0 16px;
    }

    .asild-header .asild-mobile-icons {
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;
    }

    .asild-header .asild-nav-item > a {
        height: var(--asild-mobile-nav-height);
        padding: 0 8px;
    }

    .asild-header.search-open,
    .asild-header.search-closing,
    .asild-header.cart-open,
    .asild-header.cart-closing,
    .asild-header.mobile-closing,
    .asild-header.mobile-open {
        background: #fff;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }

    .asild-header.cart-open .asild-global-nav,
    .asild-header.cart-closing .asild-global-nav,
    .asild-header.mobile-closing .asild-global-nav,
    .asild-header.mobile-open .asild-global-nav,
    .asild-header.search-open .asild-global-nav,
    .asild-header.search-closing .asild-global-nav {
        z-index: 10001;
    }

    .asild-header.search-open .asild-mobile-only:first-child,
    .asild-header.search-closing .asild-mobile-only:first-child,
    .asild-header.cart-open .asild-mobile-only:first-child,
    .asild-header.cart-closing .asild-mobile-only:first-child,
    .asild-header.mobile-closing .asild-mobile-only:first-child,
    .asild-header.mobile-open .asild-mobile-only:first-child,
    .asild-header.search-open #asild-mobile-search-btn,
    .asild-header.search-closing #asild-mobile-search-btn,
    .asild-header.cart-open #asild-mobile-search-btn,
    .asild-header.cart-closing #asild-mobile-search-btn,
    .asild-header.mobile-closing #asild-mobile-search-btn,
    .asild-header.mobile-open #asild-mobile-search-btn,
    .asild-header.search-open #asild-mobile-bag-btn,
    .asild-header.search-closing #asild-mobile-bag-btn,
    .asild-header.cart-open #asild-mobile-bag-btn,
    .asild-header.cart-closing #asild-mobile-bag-btn,
    .asild-header.mobile-closing #asild-mobile-bag-btn,
    .asild-header.mobile-open #asild-mobile-bag-btn {
        visibility: hidden;
        pointer-events: none;
    }

    .asild-header.cart-open .asild-menu-toggle,
    .asild-header.cart-closing .asild-menu-toggle,
    .asild-header.mobile-closing .asild-menu-toggle,
    .asild-header.mobile-open .asild-menu-toggle,
    .asild-header.search-open .asild-menu-toggle,
    .asild-header.search-closing .asild-menu-toggle {
        visibility: visible;
        pointer-events: auto;
        z-index: 10002;
    }

    .asild-header.cart-open .asild-mobile-panel-close,
    .asild-header.mobile-open .asild-mobile-panel-close,
    .asild-header.search-open .asild-mobile-panel-close {
        display: none;
    }

    .asild-header .asild-cart-dropdown {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9997;
        border-radius: 0;
        visibility: hidden;
        pointer-events: none;
        background: transparent;
    }

    .asild-header .asild-cart-dropdown::before {
        content: "";
        position: fixed;
        inset: 0;
        background: rgba(251, 251, 253, 1);
        transform: translateY(-100%);
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }

    .asild-header.cart-open .asild-cart-dropdown,
    .asild-header.cart-closing .asild-cart-dropdown {
        visibility: visible;
    }

    .asild-header.cart-open .asild-cart-dropdown {
        pointer-events: auto;
    }

    .asild-header.cart-open .asild-cart-dropdown::before {
        transform: translateY(0);
    }

    .asild-header.cart-closing .asild-cart-dropdown::before {
        transform: translateY(-100%);
    }

    .asild-header .asild-cart-content {
        padding: 72px 36px 40px 36px;
        max-width: 100%;
        position: relative;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transform: none;
        transition: opacity 0.22s ease, visibility 0s linear 0.22s;
    }

    .asild-header.cart-open .asild-cart-content,
    .asild-header.cart-closing .asild-cart-content {
        visibility: visible;
    }

    .asild-header.cart-open .asild-cart-content {
        opacity: 1;
    }

    .asild-header .asild-cart-header {
        margin-bottom: 18px;
    }

    .asild-header .asild-cart-header h2 {
        font-size: 24px;
        line-height: 1.2;
    }

    .asild-header .asild-cart-checkout-btn {
        display: block;
        width: 100%;
        text-align: center;
        padding: 14px 20px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 12px;
        margin-bottom: 32px;
        background: #E30613;
        color: #fff;
    }

    .asild-header .asild-cart-checkout-btn-desktop {
        display: none;
    }

    .asild-header .asild-cart-checkout-btn-mobile {
        display: block;
    }

    .asild-header .asild-cart-checkout-btn:hover {
        background: #c30410;
    }

    .asild-header .asild-cart-items {
        margin-bottom: 26px;
        padding-bottom: 0;
    }

    .asild-header .asild-cart-item {
        gap: 16px;
        align-items: flex-start;
    }

    .asild-header .asild-cart-item-info a {
        font-size: 16px;
        line-height: 1.35;
    }

    .asild-header .asild-cart-profile h3 {
        font-size: 14px;
        line-height: 1.3;
        color: #1D1D1B;
        font-weight: 400;
        margin-bottom: 14px;
    }

    .asild-header .asild-cart-profile-links li {
        margin-bottom: 18px;
    }

    .asild-header .asild-cart-profile-links a {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 16px;
        font-weight: 600;
        color: #1D1D1B;
    }

    .asild-header .asild-cart-profile-links a svg {
        width: 14px;
        height: 14px;
        color: #1D1D1B;
        flex-shrink: 0;
    }

    .asild-header .asild-cart-profile-links a:hover {
        color: #E30613;
    }

    .asild-header .asild-cart-profile-links a:hover svg {
        color: #E30613;
    }

    .asild-header .asild-search-panel {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9997;
        visibility: hidden;
        pointer-events: none;
        background: transparent;
    }

    .asild-header .asild-search-panel::before {
        content: "";
        position: fixed;
        inset: 0;
        background: rgba(251, 251, 253, 1);
        transform: translateY(-100%);
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }

    .asild-header.search-open .asild-search-panel,
    .asild-header.search-closing .asild-search-panel {
        visibility: visible;
    }

    .asild-header.search-open .asild-search-panel {
        pointer-events: auto;
    }

    .asild-header.search-open .asild-search-panel::before {
        transform: translateY(0);
    }

    .asild-header.search-closing .asild-search-panel::before {
        transform: translateY(-100%);
    }

    .asild-header .asild-search-panel-close {
        display: none;
    }

    .asild-header .asild-search-content {
        padding: 72px 36px 40px 36px;
        max-width: 100%;
        position: relative;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transform: none;
        transition: opacity 0.22s ease, visibility 0s linear 0.22s;
    }

    .asild-header.search-open .asild-search-content,
    .asild-header.search-closing .asild-search-content {
        visibility: visible;
    }

    .asild-header.search-open .asild-search-content {
        opacity: 1;
    }

    .asild-header .asild-search-input-wrapper {
        gap: 10px;
        margin-bottom: 38px;
    }

    .asild-header .asild-search-input-wrapper svg {
        width: 20px;
        height: 20px;
        stroke: #1D1D1B;
    }

    .asild-header .asild-search-input {
        font-size: 24px;
        font-weight: 600;
        color: #1D1D1B;
    }

    .asild-header .asild-search-input::placeholder {
        color: #1D1D1B;
        font-weight: 600;
        opacity: 1;
    }

    .asild-header .asild-search-title {
        font-size: 14px;
        color: #1D1D1B;
        margin-bottom: 14px;
        font-weight: 400;
    }

    .asild-header .asild-search-results {
        margin-bottom: 32px;
    }

    .asild-header .asild-search-results-title {
        font-size: 14px;
        margin-bottom: 14px;
    }

    .asild-header .asild-search-results-list {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .asild-header .asild-search-result-link {
        grid-template-columns: 88px minmax(0, 1fr);
    }

    .asild-header .asild-search-result-image {
        width: 88px;
        height: 88px;
    }

    .asild-header .asild-search-result-name,
    .asild-header .asild-search-result-price {
        font-size: 14px;
    }

    .asild-header .asild-search-links li {
        margin-bottom: 16px;
    }

    .asild-header .asild-search-links a {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        color: #1d1d1f;
    }

    .asild-header .asild-search-links a svg {
        width: 12px;
        height: 12px;
        margin-right: 12px;
        color: #6e6e73;
        flex-shrink: 0;
    }

    .asild-header .asild-mobile-menu-close {
        display: none;
        top: 0;
        right: 16px;
        font-size: 24px;
        width: 24px;
        height: var(--asild-mobile-nav-height);
        background: none;
        border-radius: 0;
        z-index: 9999;
    }

    .asild-header .asild-mobile-menu {
        padding: 60px 36px 40px 36px;
    }
}
