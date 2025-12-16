type user = {
    name : string;
    id : number
}

const firstUser : user = {
    name : "Moule",
    id : 1
}

const canEdit = <X>(object : X , key : keyof X) => {
    return object[key]
}

const result = canEdit(firstUser , 'name')

console.log(result)



enum UserRoles {
    Admin = 'Admin',
    Editor = "Editor",
    Viewer = "Viewer"
}

const canAccess = (role : UserRoles) => {
    if ( role === UserRoles.Admin || role === UserRoles.Editor || role === UserRoles.Viewer) {
        return true;
    }else{
        return false;
    }
}