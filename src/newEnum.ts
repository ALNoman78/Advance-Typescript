// todo [ first I have to create a object like ]

enum UserRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = ( role : UserRole) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        console.log("You've access to edit the file ")
    }
    else {
        console.log("You can't")
    }
}

const isEditPermit = canEdit(UserRole.Admin)
console.log(isEditPermit)