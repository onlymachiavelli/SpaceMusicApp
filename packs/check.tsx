const cap = (str) => {
    let check = true
    for (let i = 0; i < str.length; i++) if (/^[A-Z]$/i.test(str[i])) {
        check = false
        break
    }
    if (check) return true
    else return false

}
export const CheckUser = (user) => {
    if (user.length < 6) return false
    else {
        if (" " in user) return false
        else if (cap(user)) return false
        else return true

    }
    return true
}