

export const scrollTo = (id: string) => {
    const topOffset = document.getElementById(id)?.offsetTop
    let yScroll = scrollY
    setInterval(() => {
        if (topOffset && yScroll < topOffset) {
            const addPoint = 30
            window.scrollTo(yScroll - addPoint, yScroll - addPoint)
            yScroll += addPoint;
        }
    }, 1)  
}

export const footerScrollTo = (id: string) => {
    const topOffset = document.getElementById(id)?.offsetTop
    let yScroll = scrollY
    setInterval(() => {
        if (topOffset && yScroll > topOffset) {
            const addPoint = 30
            window.scrollTo(yScroll + addPoint, yScroll + addPoint)
            yScroll -= addPoint;
        }
    }, 1)  
}