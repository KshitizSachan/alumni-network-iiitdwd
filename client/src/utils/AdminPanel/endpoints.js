const alumniEps = {
    verification: {
        getAll: "/user/getPending",
        approve: "/user/edit",
        // {
        //     "userID": "65b57caa8c3b62d3b9feef97",
        //     "verificationStatus": 1
        // }
        reject: "/user/delete"
        // {
        //     "userID": "65b57caa8c3b62d3b9feef97",
        // }
    },
    jobs: {
        getAll: "/job/getAll",
        add: "/jobs/create",
        edit: "/job/edit",
        // {
        //     "jobID": "65b59c6f976eb5e8d0f41794",
        //     "eligibleBatch":[23,24,25]
        // }
        delete: "/job/delete"
    },
    news: {
        getAll: "/news/getAll",
        edit: "/news/edit",
        add: "/news/create",
        // {
        //     "newsID": "65b695304a879833c71bae5e",
        //     "title": "IIIT Dharwad Launches Innovative AI Curriculum",
        //     "description": "Explore cutting-edge artificial intelligence courses at IIIT Dharwad, shaping the future of technology.",
        //     "tags": [ "Tag99", "E-Cell" ]
        // }
        delete: "/news/delete"
    },
    user: {
        delete: "/user/delete"
        // {
        //     "userID": "65b57caa8c3b62d3b9feef97",
        // }
    }
}

export { alumniEps }

