import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const avaibleDateFormatted = format(props.availableAt, "EEEE' - 'd' de 'MMMM' - 'k'h'mm",{
        locale: ptBR,
    })
return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {avaibleDateFormatted}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-1">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
                        <Lock size={20} />
                        Em Breve
                    </span>
                    )}
                    
                    <span className="text-xs rounded px-2 py[2px] text-white border border-green-300">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}