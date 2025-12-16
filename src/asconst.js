//  todo as const assertion
// enum UserRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }
// todo use there javascript object
var UserRole = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
};
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var isEditPermissible = canEdit(UserRole.Admin);
console.log(isEditPermissible);
// 1. use typeof operator
// 2. use keyof operator
