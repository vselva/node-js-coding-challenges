try {
    const a = 10;
    a = 20;
} catch (e) {
    console.log('=============== Error Start ===================')
    console.log('Error Name:', e.name);
    console.log('Erorr Message:', e.message);
    console.log('Error Stack:', e.stack);
    console.log('=============== Error End ===================')
}