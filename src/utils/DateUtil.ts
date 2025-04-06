import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'

export function formatDateShort(value: Date) {
    return format(value, 'P', {locale: ptBR})
}

export function distanceFromNow(value: Date) {
    return formatDistanceToNow(value)
}