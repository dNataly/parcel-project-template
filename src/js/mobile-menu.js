(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
    const mobileBtnClose2 = document.querySelector("[data-menu-close2]");
    const mobileBtnClose3 = document.querySelector("[data-menu-close3]");
    const mobileBtnClose4 = document.querySelector("[data-menu-close4]");
    const mobileBtnClose5 = document.querySelector("[data-menu-close5]");
    const mobileBtnClose6 = document.querySelector("[data-menu-close6]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  
    mobileBtnClose2.addEventListener('click', () => {
        mobileMenuRef.classList.toggle("is-open");
    });
    
    mobileBtnClose3.addEventListener('click', () => {
        mobileMenuRef.classList.toggle("is-open");
    });
    
    mobileBtnClose4.addEventListener('click', () => {
        mobileMenuRef.classList.toggle("is-open");
    });
    
    mobileBtnClose5.addEventListener('click', () => {
        mobileMenuRef.classList.toggle("is-open");
    });
    
    mobileBtnClose6.addEventListener('click', () => {
        mobileMenuRef.classList.toggle("is-open");
    });
  })()