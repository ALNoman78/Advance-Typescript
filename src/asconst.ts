//  todo as const assertion

// enum UserRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }


// todo use there javascript object

const UserRole = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    } else {
        return false;
    }
}

const isEditPermissible = canEdit(UserRole.Admin)
console.log(isEditPermissible)

// 1. use typeof operator
// 2. use keyof operator