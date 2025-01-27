
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
import { HiUser, HiUsers } from "react-icons/hi2";
import countryList from "react-select-country-list";


const data = {
    flyers: [
        {
            id: "pub-cybersec",
            title: "Top 5 Cyber-Security Startups",
            description: "Coders HQ is working with Government entity partner to find the best local Cyber Security Startups. If you have a cyber security startup then please fill the form for a chance to work with one of our partners.",
            image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            active: true,
            highlights: [
                'Coders(hq) partner are looking for cyber security startups',
                'Top 5 will be selected',
                'Chance to work with a top government agency',
                'Applications are open'
            ],
            date: {
                text: "open",
                tooltip: "There is no deadline",
            },
            details: "Please fill the form with as much detail as possible. Explain your startup and where you are in your journey.",
            form: [
                {
                    name: "First name",
                    id: "first_name",
                    type: "text",
                    required: true,
                    placeholder: "First",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Last name",
                    id: "last_name",
                    type: "text",
                    required: true,
                    placeholder: "Last",
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
                    placeholder: "example.com",
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
        {
            id: "amb-wintercamp",
            title: "Winter Camp Activity For Students",
            description: "Winter camp is coming and in the spirit of celebration we would like to come up with an activity for students in two age groups, one is from 11-14 and the other is from 15-18. This event is for ambassadors only where we require you to come up with a fun coding related activity and have the kids participate. The event is on the 10th of Dec",
            image: "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            active: true,
            highlights: [
                'Come up with your most fun activity',
                'Help moderate and lead the event (ambassador only)',
                'Fill the form with the idea you have',
            ],
            ambassador_only: true,
            date: {
                text: "10th Dec",
                date: new Date("2022-12-10"),
                tooltip: "Deadline is on the 10th",
            },
            badgeList: [
                {
                    icon: <HiUser/>,
                    text: "ambassador",
                    tooltip: "Ambassador only",
                },
            ],
            details: "Please come up with a fun activity you think the kids would love. It must be related to coding but feel free to be creative with it. If you dont have an idea then feel free to join if you are interested either way.",
            form: [
                {
                    name: "First name",
                    id: "first_name",
                    type: "text",
                    required: true,
                    placeholder: "First",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Last name",
                    id: "last_name",
                    type: "text",
                    required: true,
                    placeholder: "Last",
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
                    name: "Activity Idea",
                    type: "textarea",
                    id: "details",
                    rows: 4,
                    helperText: "Explain your idea here"
                },
            ]
        },
        {
            id: "amb-nationalday",
            title: "UAE National Day Activity",
            description: "The national day is aroud the corner and we would like to activate the Coders(hq) space. If you would like to use this time and come up with an idea realted to the national day then please suggest your idea in the form below. This activity will be lead by the ambassadors but will be for the public and to celebrate the UAE national day.",
            image: "https://images.unsplash.com/photo-1603798994946-5ea9dbacf20e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            active: true,
            highlights: [
                'Come up with your most fun activity',
                'In celebration of the UAE National Day',
                'On Wednesday the 30th of Nov',
                'The event can last from the morning to the afternoon',
            ],
            ambassador_only: false,
            date: {
                text: "30th Nov",
                date: new Date("2022-11-30"),
                tooltip: "Deadline is on the 30th",
            },
            badgeList: [
                {
                    icon: <HiUsers/>,
                    text: "public",
                    tooltip: "Anyone can join",
                },
                {
                    icon: <HiUser/>,
                    text: "ambassador",
                    tooltip: "Ambassador lead",
                },
            ],
            details: "The event is public but must be lead by an ambassador. The event will not take place if an ambassador is not available to take the lead.",
            form: [
                {
                    name: "First name",
                    id: "first_name",
                    type: "text",
                    required: true,
                    placeholder: "First",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Last name",
                    id: "last_name",
                    type: "text",
                    required: true,
                    placeholder: "Last",
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
                    name: "Activity Idea",
                    type: "textarea",
                    id: "details",
                    rows: 4,
                    helperText: "Explain your idea here"
                },
                {
                    name: "Are you an ambassador?",
                    type: "checkbox",
                    id: "ambassador",
                    helperText: ""
                },
            ]
        },
        
    ],
}

export {data}