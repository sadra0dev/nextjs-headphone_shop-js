export default {
    name: "hero-banner",
    title: "Hero Banner",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            type: "string",
            name: "smallText",
            title: "Small Text",
        },
        {
            type: "string",
            name: "timeSale",
            title: "Time sale",
        },
        {
            type: "string",
            name: "heroText",
            title: "Hero text",
        },
        {
            type: "document",
            name: "button",
            title: "Button",
            fields: [
                {
                    type: "string",
                    name: "text",
                    title: "Text",
                },
                {
                    type: "url",
                    name: "url",
                    title: "URL",
                },
            ],
        },
        {
            type: "document",
            name: "description",
            title: "Description",
            fields: [
                {
                    type: "string",
                    name: "title",
                    title: "Title",
                },
                {
                    type: "string",
                    name: "content",
                    title: "Content",
                },
            ],
        },
    ],
}
