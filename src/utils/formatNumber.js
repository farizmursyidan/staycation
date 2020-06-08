export default number => {
    const numberingFormat = new Intl.NumberFormat("en-US");
    return numberingFormat.format(number);
}