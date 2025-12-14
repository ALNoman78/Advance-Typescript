// todo Enum

//? set of fixed string literal store in one place 

// type UserRole = "Admin" | "Editor" | "Viewer"

// Now that's fixed type

enum UserRole {
    Admin = 'Admin',
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRole) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else {
        return false;
    }
}

const isEditPermit = canEdit(UserRole.Admin)
console.log(isEditPermit)