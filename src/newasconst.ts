// use as const instead of Enum

const UserRole = {
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer"
} as const;

/* Use 
1. keyof and 
2. typeof operator

*/

const canEdit = (role : keyof typeof UserRole) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else{
        return false;
    }
}