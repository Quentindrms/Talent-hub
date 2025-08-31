/** Typage */

/** Type announce pour architecture d'une annonce */

export type Announce = {
    id: number,
    title: string,
    description: string,
    bodytext: string,
    skills: string[],
    type: string,
    start_date: Date,
    salary: number,
    salary_unit: string,
    password: string,
    mail: string,
    phone: string,
}

/** Type skills pour l'architecture d'une compétence */
export type Skills = {
    id: number, //identification par id
    value: string, //valeur backend
    text: string, //valeur frontend
}
