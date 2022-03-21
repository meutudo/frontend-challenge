const DEFAULT_OPTIONS = {
    day: '2-digit',
    month: 'long'
}

export function formatDate(
    date: string,
    options: any = DEFAULT_OPTIONS
): string {
    const dateSplit = date.split('/')
    const newDate = new Date(
        Date.UTC(
            Number(dateSplit[2]),
            Number(dateSplit[1]),
            Number(dateSplit[0])
        )
    )

    return new Intl.DateTimeFormat('pt-BR', options).format(newDate)
}
