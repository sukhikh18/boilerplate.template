const scrollTo = (target, topOffset = 30, delay = 400) => {
    if( !target || target.length <= 1 ) return false
    let $target;

    if( target instanceof jQuery ) {
        $target = target.first()
    }
    else {
        $target = $(target).length ? $(target).first() : $('a[name='+target.slice(1)+']').first()
    }

    if( $target.offset().top ) {
        // for call from dropdown
        setTimeout(() => {
            return $('html, body').animate({ scrollTop: $target.offset().top - topOffset }, delay)
        }, 100)
        return true
    }

    return console.log('Element not found.')
}

export default scrollTo