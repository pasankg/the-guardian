import { useContext } from 'react'
import { searchContext } from "../App";

const useGetGuardianContent = () => {
    const guardianApi = useContext(searchContext);

    const getContent = async(searchValue: string) => {
        if(!guardianApi) return
        return await guardianApi?.editions.search(searchValue); //guardian-js doesn't support for typescript
    }

    return { getContent }
}

export default useGetGuardianContent