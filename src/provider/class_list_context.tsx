import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast_error from "../components/toast/toast_error";
import { useNavigate } from "react-router";
import type { ClassModel } from "../model/class_model";

export const ClassListContext = createContext({
    classList: [{_id: "", name: "", academicYear: "", isArchived: false}],

    viewClass: (classId: string) => { console.log(classId) },
    newClass: () => { console.log("new class") }
})


function ClassListProvider({children} : {children : React.ReactNode}) {

    const navigate = useNavigate()

    const [classList, setClassList] = useState<ClassModel[]>([])

    useEffect(() => {
        getClassList()
    }, [])

    async function getClassList():Promise<void> {
        try {
            const response = await axios.get(`https://huawei-practice-web-backend.vercel.app/api/class`)

            if (response.status === 200) {
                setClassList(response.data)
            }
        }
        catch (err: any) {
            toast_error(err.response.data.message)
        }
    }

    function viewClass(classId: string) {
        navigate(`/class/${classId}`)
    }

    function newClass() {
        navigate("/class/new")
    }

    return (
        <ClassListContext.Provider value={{classList, viewClass, newClass}}>
            {children}
        </ClassListContext.Provider>
    )
}

export default ClassListProvider