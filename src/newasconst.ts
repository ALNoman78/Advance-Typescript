// use as const instead of Enum

const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;


// todo for [ as const ] => use keyof and typeof operator


const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
}

const isPermit = canEdit('ADMIN')
console.log(isPermit);