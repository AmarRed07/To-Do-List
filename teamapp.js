class Member {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Team {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
    }
    
    deleteMember (member) {
        let index = this.members.indexOf(member);
        this.members.splice(index,1);
    }
}

let teams = [];
let teamId = 0;

onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
    drawDom();
});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function drawDom() {
    let teamDiv = document.getElementById('teams');
    clearElement(teamDiv);
    for(team of teams) {
        let table = createTeamTable(team);
        let title = document.createElement('h2');
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) {
            createMemberRow(team, table, member);
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onClick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index, 1);
        drawDom();
    };
    return btn;
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Team';
    btn.onClick = () => {
        let index = teams.indexOf(teams);
        teams.splice(index, 1);
        drawDom();
    };
    return btn;
}

function createTeamTable()

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}