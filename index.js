'use strict'




let showContacts = () => {
    for (let person of contacts) {
        let contact = "";
        contact+=(`${person.name} `)
        contact+=(`(${person.phone}) `)
        contact+=(`<${person.email}>`)
        console.log(contact)
        alert(contact)
    }
}

let searchContacts = (personName) => {
    let contact = "";
    let flag = 0;
    for(let person of contacts) {
        if (person.name.toLowerCase()==personName.toLowerCase()) {
            contact+=(`[${person.id}] `)
            contact+=(`${person.name} `)
            contact+=(`(${person.phone}) `)
            contact+=(`<${person.email}>`)
            flag = 1;
        }
        continue;
    }
    console.log((flag==1) ? contact : "No contact found with that name")
    alert((flag==1) ? contact : "No contact found with that name")
}

let addContact = (newName, newPhone, newEmail) => {
    let newContact = {

        name: newName,
        phone: newPhone,
        email: newEmail
    }
    contacts.push(newContact)
}

let menu = 0;

while (menu == 0) {
    let choose = prompt("what do you want to do? = A. Add a contact B. See contacts list C. Find a contact D. Exit");
    switch (choose) {
        case 'A':
            let addName = prompt('input a new contact name')
            let addPhone = prompt('input number contact')
            let addEmail = prompt('input email contact')
            addContact(addName,addPhone,addEmail)
            break;
    
        case 'B':
            showContacts();
            break;

        case 'C':
            let searchName = prompt('siapa yang anda cari?');
            searchContacts(searchName);
            break;
        
        case 'D':
            menu = 1;
            break;

        default:
            alert ('there is no option for that')
            break;
    }
}






// showContacts();

// searchContacts("alpha"); // Alpha (+1 111 101010) <alpha@avalon.com>
// searchContacts("adit"); // No contact found with that name

// addContact(4, 'Zaky', '+62 838 20790514', 'zack4tress@gmail.com');

// searchContacts("zaky") // Zaky (+62 838 20790514) <zack4tress@gmail.com>