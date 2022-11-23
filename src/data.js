
/* 
Id
Title
Date
Time
Duration
Description
Active
Pre-requisite

*/
import { HiMail } from "react-icons/hi";
import countryList from "react-select-country-list";


const data = {
    flyers: [
        {
            id: "pub-cybersec",
            title: "Top 5 Cyber-Security Startups",
            description: "Coders HQ is working with Dubai Police to find the best local Cyber Security Startups. If you have a cyber security startup then please fill the form for a chance to work with Dubai Police.",
            image: "https://images.unsplash.com/photo-1538115081112-32c7d8401807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            active: true,
            highlights: [
                'Dubai Police are looking for cyber security startups',
                'Top 5 will be selected',
                'Chance to work with Dubai Police',
                'Applications are open'
            ],
            details: "Please fill the form with as much detail as possible. Explain your startup and where you are in your journey.",
            form: [
                {
                    name: "First name",
                    id: "first_name",
                    type: "text",
                    required: true,
                    placeholder: "John",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Last name",
                    id: "last_name",
                    type: "text",
                    required: true,
                    placeholder: "Doe",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Email",
                    id: "email",
                    type: "email",
                    required: true,
                    placeholder: "example@email.com",
                    helperText: "",
                    icon: HiMail,
                    disabled: false,
                    readOnly: false,  
                },
                {
                    name: "Phone",
                    id: "phone",
                    type: "text",
                    required: true,
                    placeholder: "05XXXXXXXX",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Nationality",
                    id: "nationality",
                    type: "select",
                    required: true,
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                    options: countryList().getLabels()
                },
                {
                    name: "Startup Name",
                    id: "name",
                    type: "text",
                    placeholder: "",
                    helperText: "",
                    required: true,
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Website",
                    id: "website",
                    type: "text",
                    placeholder: "",
                    required: false,
                    addon: "https://",
                    helperText: "If your startup has a website"
                },
                {
                    name: "Startup Details",
                    type: "textarea",
                    id: "details",
                    rows: 4,
                    helperText: "Please fill in as much detail as possible about your startup"
                },
            ]
        },
        
    ],
}

export {data}