// import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import * as S from '../CreatorForm.styles';
import { Course } from '@app/api/course.api';

interface Step1Props {
  courses: Course[];
}

export const Step1: React.FC<Step1Props> = ({ courses }) => {
  // const { t } = useTranslation();
  return (
    <S.FormContent>
      <BaseForm.Item name="name" label="Název" rules={[{ required: true, message: 'Jméno je povinné' }]}>
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="description"
        label="Zadání"
        rules={[{ required: true, message: 'Zadání je povinné' }]}
      >
        <BaseInput.TextArea rows={4} />
      </BaseForm.Item>
      <BaseForm.Item name="template" label="Šablona">
        <BaseSelect placeholder="Zvolte šablonu">
          {courses.map(({ id, name }) => (
            <Option value={id}>{name}</Option>
          ))}
        </BaseSelect>
      </BaseForm.Item>
    </S.FormContent>
  );
};
