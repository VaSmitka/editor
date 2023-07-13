import { CourseCreatorData } from '@app/api/course.api';
import * as S from '../CreatorForm.styles';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

interface Step3Props {
  formValues?: CourseCreatorData;
}

export const Step3: React.FC<Step3Props> = ({formValues}) => {
  return (
    <S.Details key="3">
      <BaseCard title={formValues?.name} padding="1,5rem">
        <S.Box>
          <h2>Popis kurzu</h2>
          <span>{formValues?.description}</span>          
        </S.Box>
        <S.Box>
          <h2>Rozpis lekcí</h2>
          {
            formValues?.lessons.map(lesson => <S.Row key={lesson.name}>
              <h3>{lesson.name}: </h3>
              <p>{lesson.description}</p>
            </S.Row>)
          }
        </S.Box>
      </BaseCard>
    </S.Details>
  );
};
