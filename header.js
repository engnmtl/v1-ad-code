
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("asild-header");
    const megaWrapper = document.getElementById("asild-mega-wrapper");
    const desktopList = document.getElementById("asild-desktop-list");
    const desktopSearchItem = document.getElementById("asild-desktop-search-item");
    const megaMenuContent = document.getElementById("asild-mega-menu-content");
    const mobileMainList = document.getElementById("asild-mobile-main-list");
    let desktopItems = [];
    let megaSections = [];

    const searchBtn = document.getElementById("asild-search-btn");
    const searchPanel = document.getElementById("asild-search-panel");
    const searchInput = document.getElementById("asild-search-input");
    const searchResults = document.getElementById("asild-search-results");

    const bagBtn = document.getElementById("asild-bag-btn");
    const cartDropdown = document.getElementById("asild-cart-dropdown");

    const profileBtn = document.getElementById("asild-profile-btn");
    const profileDropdown = document.getElementById("asild-profile-dropdown");

    let hideMegaTimeout;
    const mobilePanelTransitionMs = 350;

    const getDirectChildLink = (element) => {
        return Array.from(element.children).find((child) => child.tagName === "A") || null;
    };

    const getSourceMenuItems = () => {
        const sourceMenu = document.querySelector(".navigation #HeaderMenu2");
        if (!sourceMenu) return [];
        return Array.from(sourceMenu.children).filter((item) => item.tagName === "LI");
    };

    const normalizeMenuKey = (value) => {
        return value
            .toLowerCase()
            .replace(/ç/g, "c")
            .replace(/ğ/g, "g")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ş/g, "s")
            .replace(/ü/g, "u")
            .replace(/[^a-z0-9]+/g, "");
    };

    const getMegaSectionIdByLabel = (label) => {
        const normalized = normalizeMenuKey(label);
        const aliasMap = {
            biowhiten: "mega-biowhitten",
            biowhitten: "mega-biowhitten",
            surgimag: "mega-surgimac",
            surgimac: "mega-surgimac"
        };

        const aliasedId = aliasMap[normalized];
        if (aliasedId && document.getElementById(aliasedId)) {
            return aliasedId;
        }

        const directId = `mega-${normalized}`;
        return document.getElementById(directId) ? directId : null;
    };

    const syncDynamicMenuCollections = () => {
        desktopItems = Array.from(document.querySelectorAll(".asild-has-mega"));
        megaSections = Array.from(document.querySelectorAll(".asild-mega-section"));
    };

    const createMenuLink = (sourceLink) => {
        const link = document.createElement("a");
        link.href = sourceLink.getAttribute("href") || "#";

        const target = sourceLink.getAttribute("target");
        if (target) link.target = target;

        const title = sourceLink.getAttribute("title") || sourceLink.textContent.trim();
        if (title) link.title = title;

        link.textContent = sourceLink.textContent.trim();
        return link;
    };

    const syncMegaMainList = (targetId, submenuLinks) => {
        if (!targetId) return;

        const megaSection = document.getElementById(targetId);
        const mainList = megaSection?.querySelector(".asild-mega-list-main");
        if (!mainList) return;

        mainList.innerHTML = "";
        if (!submenuLinks.length) return;

        submenuLinks.forEach((submenuLink) => {
            const listItem = document.createElement("li");
            listItem.appendChild(createMenuLink(submenuLink));
            mainList.appendChild(listItem);
        });
    };

    const buildDynamicMenu = () => {
        if (!desktopList || !desktopSearchItem || !megaMenuContent || !mobileMainList) return false;

        desktopList.querySelectorAll(".asild-dynamic-menu-item").forEach((item) => item.remove());
        mobileMainList.innerHTML = "";

        const sourceItems = getSourceMenuItems();
        if (!sourceItems.length) {
            syncDynamicMenuCollections();
            return false;
        }

        sourceItems.forEach((sourceItem, index) => {
            const sourceLink = getDirectChildLink(sourceItem);
            if (!sourceLink) return;
            const submenuLinks = Array.from(sourceItem.querySelectorAll(".Flexscroll ul li > a"));

            const desktopItem = document.createElement("li");
            desktopItem.className = "asild-nav-item asild-desktop-only asild-dynamic-menu-item";
            desktopItem.dataset.index = String(index);

            const targetId = getMegaSectionIdByLabel(sourceLink.textContent.trim());
            if (targetId) {
                syncMegaMainList(targetId, submenuLinks);
            }

            if (targetId && submenuLinks.length) {
                desktopItem.classList.add("asild-has-mega");
                desktopItem.dataset.target = targetId;
            }

            desktopItem.appendChild(createMenuLink(sourceLink));
            desktopList.insertBefore(desktopItem, desktopSearchItem);

            const mobileItem = document.createElement("li");
            mobileItem.className = "asild-mobile-menu-item";
            mobileItem.appendChild(createMenuLink(sourceLink));

            mobileMainList.appendChild(mobileItem);
        });

        syncDynamicMenuCollections();
        return true;
    };

    const initializeDynamicMenu = (attempt = 0) => {
        const built = buildDynamicMenu();
        if (built) {
            bindDesktopMegaMenuEvents();
            return;
        }

        if (attempt < 20) {
            window.setTimeout(() => initializeDynamicMenu(attempt + 1), 250);
        }
    };

    let sourceSearchInput = null;
    let sourceSearchResults = null;
    let searchResultsObserver = null;
    let searchSyncTimeout = null;

    const syncSearchPanelHeight = () => {
        if (!searchPanel) return;
        if (!header.classList.contains("search-open") && !header.classList.contains("search-closing")) return;

        const isMobile = window.innerWidth <= 833;
        searchPanel.style.height = (isMobile ? window.innerHeight : searchPanel.scrollHeight) + "px";
    };

    const clearSearchResults = () => {
        if (!searchResults) return;
        searchResults.classList.remove("has-results");
        searchResults.innerHTML = "";
    };

    const renderSearchResults = () => {
        if (!searchResults) return;

        const productLinks = Array.from(sourceSearchResults?.querySelectorAll(".products > li > a") || []);
        if (!productLinks.length) {
            clearSearchResults();
            syncSearchPanelHeight();
            return;
        }

        const title = document.createElement("h3");
        title.className = "asild-search-results-title";
        title.textContent = "Sonuclar";

        const list = document.createElement("ul");
        list.className = "asild-search-results-list";

        productLinks.slice(0, 6).forEach((productLink) => {
            const listItem = document.createElement("li");
            listItem.className = "asild-search-results-item";

            const link = document.createElement("a");
            link.className = "asild-search-result-link";
            link.href = productLink.getAttribute("href") || "#";

            const target = productLink.getAttribute("target");
            if (target) link.target = target;

            const imageSrc = productLink.querySelector("img")?.getAttribute("src") || "";
            const productName = productLink.querySelector(".ticimax-search-product-info-name")?.textContent?.trim() || "";
            const productPrice = productLink.querySelector(".ticimax-search-product-info-price")?.textContent?.trim() || "";

            const imageWrap = document.createElement("div");
            imageWrap.className = "asild-search-result-image";
            if (imageSrc) {
                const image = document.createElement("img");
                image.src = imageSrc;
                image.alt = productName;
                imageWrap.appendChild(image);
            }

            const info = document.createElement("div");
            info.className = "asild-search-result-info";

            const name = document.createElement("div");
            name.className = "asild-search-result-name";
            name.textContent = productName;

            const price = document.createElement("div");
            price.className = "asild-search-result-price";
            price.textContent = productPrice;

            info.appendChild(name);
            if (productPrice) {
                info.appendChild(price);
            }

            link.appendChild(imageWrap);
            link.appendChild(info);
            listItem.appendChild(link);
            list.appendChild(listItem);
        });

        searchResults.innerHTML = "";
        searchResults.appendChild(title);
        searchResults.appendChild(list);
        searchResults.classList.add("has-results");
        syncSearchPanelHeight();
    };

    const connectSearchSource = () => {
        const sourceInput = document.getElementById("txtbxArama");
        const sourceResults = document.getElementById("divAramaSonuc");

        if (!sourceInput) return false;

        sourceSearchInput = sourceInput;
        sourceSearchResults = sourceResults;

        if (searchInput && searchInput.value !== sourceSearchInput.value) {
            searchInput.value = sourceSearchInput.value;
        }

        if (sourceSearchResults && !searchResultsObserver && "MutationObserver" in window) {
            searchResultsObserver = new MutationObserver(() => {
                renderSearchResults();
            });
            searchResultsObserver.observe(sourceSearchResults, { childList: true, subtree: true, attributes: true });
        }

        renderSearchResults();
        return true;
    };

    const syncSearchValueToSource = () => {
        if (!searchInput) return;
        if (!connectSearchSource() || !sourceSearchInput) return;

        const nextValue = searchInput.value;
        window.clearTimeout(searchSyncTimeout);
        searchSyncTimeout = window.setTimeout(() => {
            sourceSearchInput.value = nextValue;
            sourceSearchInput.dispatchEvent(new Event("input", { bubbles: true }));
            sourceSearchInput.dispatchEvent(new Event("change", { bubbles: true }));
            sourceSearchInput.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: "a" }));

            if (typeof window.ProductSearchTop === "function") {
                window.ProductSearchTop();
            }
        }, 120);
    };

    const initializeSearchIntegration = (attempt = 0) => {
        const connected = connectSearchSource();
        if (connected) {
            return;
        }

        if (attempt < 20) {
            window.setTimeout(() => initializeSearchIntegration(attempt + 1), 250);
        }
    };

    const lockScroll = () => { document.body.style.overflow = "hidden"; };
    const unlockScroll = () => { document.body.style.overflow = ""; };

    const closeSearch = () => {
        const isMobile = window.innerWidth <= 833;

        if (isMobile) {
            header.classList.add("search-closing");
            header.classList.remove("search-open");
            window.setTimeout(() => {
                if (searchPanel) searchPanel.style.height = "0";
                header.classList.remove("search-closing");
                unlockScroll();
            }, mobilePanelTransitionMs);
            return;
        }

        header.classList.remove("search-open");
        if (searchPanel) searchPanel.style.height = "0";
        unlockScroll();
    };

    const closeCart = () => {
        const isMobile = window.innerWidth <= 833;

        if (isMobile) {
            header.classList.add("cart-closing");
            header.classList.remove("cart-open");
            window.setTimeout(() => {
                if (cartDropdown) cartDropdown.style.height = "0";
                header.classList.remove("cart-closing");
                unlockScroll();
            }, mobilePanelTransitionMs);
            return;
        }

        header.classList.remove("cart-open");
        if (cartDropdown) cartDropdown.style.height = "0";
        unlockScroll();
    };

    const closeProfile = () => {
        header.classList.remove("profile-open");
        if (profileDropdown) profileDropdown.style.height = "0";

    };

    const closeMobileMenu = () => {
        const isMobile = window.innerWidth <= 833;

        if (isMobile) {
            header.classList.add("mobile-closing");
            header.classList.remove("mobile-open");
            window.setTimeout(() => {
                header.classList.remove("mobile-closing");
                unlockScroll();
            }, mobilePanelTransitionMs);
            return;
        }

        header.classList.remove("mobile-open");
        unlockScroll();
    };

    initializeDynamicMenu();
    initializeSearchIntegration();

    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isOpen = header.classList.contains("profile-open");
            
            if (isOpen) {
                closeProfile();
            } else {

                closeSearch();
                closeCart();
                hideAllMegaSections();
                header.classList.remove("mega-open");
                megaWrapper.style.height = "0";
                
                header.classList.add("profile-open");

                profileDropdown.style.height = profileDropdown.scrollHeight + "px";
            }
        });

        document.addEventListener("click", (e) => {
            if (header.classList.contains("profile-open")) {
                if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
                    closeProfile();
                }
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && header.classList.contains("profile-open")) {
                closeProfile();
            }
        });
    }

    if (bagBtn && cartDropdown) {
        bagBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isOpen = header.classList.contains("cart-open");
            
            if (isOpen) {
                closeCart();
            } else {

                closeSearch();
                closeProfile();
                hideAllMegaSections();
                header.classList.remove("mega-open");
                megaWrapper.style.height = "0";
                
                header.classList.add("cart-open");

                cartDropdown.style.height = cartDropdown.scrollHeight + "px";
            }
        });

        document.addEventListener("click", (e) => {
            if (header.classList.contains("cart-open")) {
                if (!cartDropdown.contains(e.target) && !bagBtn.contains(e.target)) {
                    closeCart();
                }
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && header.classList.contains("cart-open")) {
                closeCart();
            }
        });
    }

    const globalBackdrop = document.getElementById("asild-global-backdrop");
    if (globalBackdrop) {
        globalBackdrop.addEventListener("click", () => {
            closeSearch();
            closeCart();
            closeProfile();
            hideMegaMenu();
        });
    }

    if (searchBtn && searchPanel) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isOpen = header.classList.contains("search-open");

            if (isOpen) {
                closeSearch();
            } else {

                closeCart();
                closeProfile();
                hideAllMegaSections();
                header.classList.remove("mega-open");
                megaWrapper.style.height = "0";
                
                header.classList.add("search-open");

                connectSearchSource();
                syncSearchPanelHeight();

                setTimeout(() => {
                    if (searchInput) searchInput.focus();
                }, 100);
            }
        });

        document.addEventListener("click", (e) => {
            if (header.classList.contains("search-open")) {
                if (!searchPanel.contains(e.target) && !searchBtn.contains(e.target)) {
                    closeSearch();
                }
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && header.classList.contains("search-open")) {
                closeSearch();
            }
        });
    }

    const searchPanelClose = document.getElementById("asild-search-panel-close");
    if (searchPanelClose) {
        searchPanelClose.addEventListener("click", (e) => {
            e.preventDefault();
            closeSearch();
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 833) {
            header.classList.remove("mobile-open");
            header.classList.remove("mobile-closing");
            header.classList.remove("search-closing");
            header.classList.remove("cart-closing");
            document.body.style.overflow = "";
        }
    });

    const hideAllMegaSections = () => {
        megaSections.forEach(section => {
            section.classList.remove("active");
        });
    };

    const showMegaMenu = (targetId) => {
        clearTimeout(hideMegaTimeout);

        if (header.classList.contains("search-open")) {
            closeSearch();
        }

        if (header.classList.contains("cart-open")) {
            closeCart();
        }

        if (header.classList.contains("profile-open")) {
            closeProfile();
        }
        
        hideAllMegaSections();
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
            header.classList.add("mega-open");

            const sectionHeight = targetSection.scrollHeight;
            megaWrapper.style.height = sectionHeight + "px";
        }
    };

    const hideMegaMenu = () => {
        hideMegaTimeout = setTimeout(() => {
            header.classList.remove("mega-open");
            megaWrapper.style.height = "0";
            setTimeout(() => {
                if (!header.classList.contains("mega-open")) {
                    hideAllMegaSections();
                }
            }, 400); // Transition süresi kadar bekle
        }, 150); // Mause çıkınca ufak bir gecikme ver ki menüler arası geçerken kapanmasın
    };

    function bindDesktopMegaMenuEvents() {
        desktopItems.forEach((item) => {
            if (item.dataset.asildMegaBound === "true") return;

            item.addEventListener("mouseenter", () => {
                const targetId = item.getAttribute("data-target");
                showMegaMenu(targetId);
            });

            item.addEventListener("mouseleave", () => {
                hideMegaMenu();
            });

            item.dataset.asildMegaBound = "true";
        });
    }

    if (megaWrapper) {
        megaWrapper.addEventListener("mouseenter", () => {
            clearTimeout(hideMegaTimeout);
        });

        megaWrapper.addEventListener("mouseleave", () => {
            hideMegaMenu();
        });
    }

    const mobileSearchBtn = document.getElementById("asild-mobile-search-btn");
    const mobileBagBtn = document.getElementById("asild-mobile-bag-btn");
    const mobileToggle = document.getElementById("asild-mobile-toggle");

    if (mobileSearchBtn && searchPanel) {
        mobileSearchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = header.classList.contains("search-open");
            if (isOpen) {
                closeSearch();
            } else {
                closeCart();
                closeProfile();
                hideAllMegaSections();
                header.classList.remove("search-closing");
                header.classList.remove("cart-closing");
                header.classList.remove("mobile-closing");
                header.classList.remove("mega-open");
                megaWrapper.style.height = "0";
                header.classList.add("search-open");

                connectSearchSource();
                syncSearchPanelHeight();
                lockScroll();
                setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
            }
        });
    }

    if (mobileBagBtn && cartDropdown) {
        mobileBagBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = header.classList.contains("cart-open");
            if (isOpen) {
                closeCart();
            } else {
                closeSearch();
                closeProfile();
                hideAllMegaSections();
                header.classList.remove("search-closing");
                header.classList.remove("cart-closing");
                header.classList.remove("mobile-closing");
                header.classList.remove("mega-open");
                megaWrapper.style.height = "0";
                header.classList.add("cart-open");

                const isMobile = window.innerWidth <= 833;
                cartDropdown.style.height = (isMobile ? window.innerHeight : cartDropdown.scrollHeight) + "px";
                lockScroll();
            }
        });
    }

    if (mobileToggle) {
        mobileToggle.addEventListener("click", (e) => {
            e.preventDefault();

            if (header.classList.contains("search-open")) {
                closeSearch();
                return;
            }
            if (header.classList.contains("cart-open")) {
                closeCart();
                return;
            }

            const isOpen = header.classList.contains("mobile-open");
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                closeProfile();
                hideAllMegaSections();
                header.classList.remove("search-closing");
                header.classList.remove("cart-closing");
                header.classList.remove("mobile-closing");
                header.classList.add("mobile-open");
                lockScroll();
            }
        });
    }

    if (searchResults && "ResizeObserver" in window) {
        const searchResultsResizeObserver = new ResizeObserver(() => {
            syncSearchPanelHeight();
        });
        searchResultsResizeObserver.observe(searchResults);
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            syncSearchValueToSource();
        });

        searchInput.addEventListener("focus", () => {
            connectSearchSource();
        });

        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                syncSearchValueToSource();
            }
        });
    }

    const mobilePanelClose = document.getElementById("asild-mobile-panel-close");
    if (mobilePanelClose) {
        mobilePanelClose.addEventListener("click", () => {
            if (header.classList.contains("search-open")) closeSearch();
            if (header.classList.contains("cart-open")) closeCart();
            if (header.classList.contains("mobile-open")) {
                closeMobileMenu();
            }
        });
    }

    const mobileMenuClose = document.getElementById("asild-mobile-menu-close");
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener("click", () => {
            closeMobileMenu();
        });
    }
});
