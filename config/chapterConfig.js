const Airtable= require('airtable');
const base= new Airtable({
    apiKey:'keyK6OVfXMAmNkzYU',
}).base('appuW1YdhrtU5HaZU')
const chaptersTable= base('Chapters');
const categoriesTable= base('Categories');
const servicesTable= base('Services');
module.exports={
    chaptersTable,
    categoriesTable,
    servicesTable
}
