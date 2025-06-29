import RepresentativeCard from "../RepresentativeCard";
import { useNavigate } from "react-router-dom";

function QuestionBank() {
  const navigate = useNavigate();

  const navigateToBank = () => {
    console.log("clock");
    navigate("/algebra/base/card");
  };

  return (
    <RepresentativeCard
      title="Банк вопросов"
      discription="На нашем сервисе вы найдете миллиард задач, потому что мы ультра крутые"
      onClick={navigateToBank}
    />
  );
}

export default QuestionBank;
