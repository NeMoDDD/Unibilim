export function sortUsers (users) { 
    const sortedUsers = [...users].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
    ); 
    return sortedUsers
}