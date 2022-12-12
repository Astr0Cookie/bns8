const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        rootMargin: "-150px",
        threshold: 0.05,
    })



const hidelements = document.querySelectorAll('.hidden');
hidelements.forEach((el) =>observer.observe(el));


