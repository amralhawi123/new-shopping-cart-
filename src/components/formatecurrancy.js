const CURRANCY_FORMATER = new Intl.NumberFormat(undefined, {
   currency:"USD",
   style:"currency"
})

const formatCurancy = (number) => {
   return CURRANCY_FORMATER.format(number)
}

export default formatCurancy