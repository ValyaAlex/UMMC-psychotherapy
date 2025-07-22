const btsFilter = Array.from(document.querySelectorAll('[data-filter]'))
const btnReset = document.querySelector(".reset")
const error = document.querySelector(".page-events__nothing");
const followBlock = document.querySelector(".follow-block")
const category = ["webinar",
    "game",
    "group-classes",
    "open-house-day",
    "woman-classes",
    "activity",
    "training",
    "conference",
    "course",
    "lecture",
    "master-class",
    "music", "art", "program", "lesson"]
const map = category.reduce((a, e) => {
    const bt = btsFilter.find((btel) => btel.dataset.filter === e)
    const els = Array.from(document.querySelectorAll(`.page-events__card-item.${e}`))
    let hide = false

    a.set(e, (fl, reset) => {
        if (fl) {
            reset || bt.classList.add('selected')
            if (btnReset.classList.contains("selected")) {
                btnReset.classList.remove("selected")
            }
            if (!hide) return
            hide = false
            els.forEach((e) => e.classList.remove('hide'))
        } else {
            bt.classList.remove('selected')
            if (hide) return
            hide = true
            els.forEach((e) => e.classList.add('hide'))
        }
    })
    return a
}, new Map())

map.set('reset', (fl) => fl && category.forEach((e) => {
    map.get(e)(fl, true)
    btnReset.classList.add("selected")
    error.classList.add("hidden")
    followBlock.classList.remove("hide")
}))

btsFilter.forEach((i) => i.addEventListener('click', ({ target: { dataset: { filter } } }) => {
    const cards = Array.from(document.querySelectorAll('.page-events__card-item'));
    let arr = [];
    cards.forEach((e) => {
        if (e.classList.contains(filter)) {
            arr.push(e);
            if (arr.length > 0) {
                error.classList.add("hidden")
                followBlock.classList.remove("hide")
            } else {
                error.classList.remove('hidden')
                followBlock.classList.add("hide")
            }
        } else {
            if (arr.length > 0) {
                error.classList.add("hidden")
                followBlock.classList.remove("hide")
            } else {
                error.classList.remove('hidden')
                followBlock.classList.add("hide")
            }
        }
    })

    for (let [key, show] of map.entries()) {
        show(filter === key);
    }
}))

