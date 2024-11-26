const EXPERIENCES = [
    {
        tittle: "Help Desk Support",
        company: "Prodeman SA",
        description: "I work at a help desk, covering level 1 incident resolution across all IT areas and managing incidents and requests through a ticketing tool. I handle user onboarding, offboarding, and modifications, administering file servers, Microsoft 365, and other additional tasks.",
        time: "At present"
    },
    {
        tittle: "Help Desk Support",
        company: "JLA Argentina",
        description: "I work in technical support for users; managing incidents and requests through a ticketing tool; creating guides; user account setup, modification, and termination.",
        time: "2023-2024"
    },
    {
        tittle: "Dependiente de Aduana",
        company: "Ines Verstraete",
        description: "Management of export and import documents. Continuous communication and interaction with customs.",
        time: "2020 - 2023",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const experiences = document.getElementById('experiencesInfo');

    function crearTimeline() {
        const timeline = document.createElement('ol');
        timeline.classList = 'relative mt-16';

        EXPERIENCES.forEach(exp => {
            const li = document.createElement('li');
            li.classList = 'ms-4 ml-8';
            li.innerHTML = `
                <div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                    <div class="relative pb-12 md:col-span-2">
                        <div class="sticky top-0">
                            <span class="text-blue-400 -left-[44px] absolute rounded-full text-5xl">•</span>
                            <h3 class="text-xl font-semibold text-blue-300 dark:text-white">${exp.tittle}</h3>
                            <p class="mb-1 text-base font-normal text-gray-200 dark:text-gray-200">${exp.company}</p>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${exp.time}</time>
                        </div>
                    </div>
                    <div class="relative flex flex-col gap-2 pb-4 text-gray-300 dark:text-gray-300 md:col-span-3">
                        ${exp.description}
                    </div>
                </div>
                
            `;
            timeline.appendChild(li);
        });

        experiences.appendChild(timeline);
    }

    crearTimeline();
});
