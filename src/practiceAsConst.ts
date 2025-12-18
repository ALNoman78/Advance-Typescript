const UserRole = {
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer"
} as const;

const canEdit = (role : (typeof UserRole [ keyof typeof UserRole]) ) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true
    }else{
        return false;
    }
}

const result = canEdit(UserRole.Admin)
console.log(result)