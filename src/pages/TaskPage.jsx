import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    function onBackClick(){
        navigate(-1)
    }
    return (
            <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
                <div className="w-[500px] space-y-4">
                    <div className="flex justify-center relative mb-6">
                        <button onClick={() => onBackClick()} className="absolute top-0 bottom-0 text-slate-100"><ChevronLeftIcon/></button>
                        <h1 className="text-slate-100 text-3xl font-bold text-center">Detalhes da Tarefa</h1>
                    </div>
                    <div className="bg-slate-200 p-4 rounded-md">
                        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                        <p className="text-slate-600">{description}</p>
                    </div>
      </div>
    </div>
    )
}

export default TaskPage;