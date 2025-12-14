// todo Enum
//? set of fixed string literal store in one place 
// type UserRole = "Admin" | "Editor" | "Viewer"
// Now that's fixed type
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var isEditPermit = canEdit(UserRole.Admin);
console.log(isEditPermit);
