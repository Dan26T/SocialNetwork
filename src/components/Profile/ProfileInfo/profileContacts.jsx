import React from "react";


const Contacts = (props) => {
    let contacts = props.contacts
    let b = []
    for (let key in contacts) {
        b.push(`${key} :  ${contacts[key]} ;
     `)
    }
    let m = b.map(e => <div>
        <span>{e.facebook},  </span>

    </div>)
    return <div>
        <div>
            <span>Facebook: {props.contacts.facebook != null ? props.contacts.facebook : "No;"}</span>
            <span>Website: {props.contacts.website != null ? props.contacts.website : "No;"}</span>
            <span>VK: {props.contacts.vk != null ? props.contacts.vk : "No;"}</span>
        </div>
        <div>
            <span>Twitter: {props.contacts.twitter != null ? props.contacts.twitter : "No;"}</span>
            <span>Instagram: {props.contacts.instagram != null ? props.contacts.instagram : "No;"}</span>
            <span>Youtube: {props.contacts.youtube != null ? props.contacts.youtube : "No;"}</span>
        </div>
        <div>
            <span>Github: {props.contacts.github != null ? props.contacts.github : "No;"}</span>
            <span>MainLink: {props.contacts.mainLink != null ? props.contacts.mainLink : "No;"}</span>
        </div>
    </div>

}
export default Contacts;
