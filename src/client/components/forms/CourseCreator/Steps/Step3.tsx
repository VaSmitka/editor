import { CourseCreatorData } from '@app/api/course.api';
import * as S from '../CreatorForm.styles';

interface Step3Props {
  formValues?: CourseCreatorData;
}

export const Step3: React.FC<Step3Props> = ({}) => {
  return (
    <S.Details key="3">
      {/*formValues
        .filter((item) => !!item.value)
        .map((item: Field, index: number) => {
          return (
            <S.DetailsRow key={index}>
              <S.DetailsTitle>{item.name}</S.DetailsTitle>
              <S.DetailsValue>{item.value}</S.DetailsValue>
            </S.DetailsRow>
          );
        })*/}
    </S.Details>
  );
};
