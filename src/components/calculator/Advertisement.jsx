import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ProtocolModal from '../modals/Protocol'

const Advertisement = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Разверните возможности вашего бизнеса с нашим калькулятором стоимости регистрации международного товарного знака по Мадридской системе!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Этот инновационный инструмент разработан специально для предпринимателей, юристов и всех, кто ценит свой бренд и стремится к его международной защите. Сэкономьте время и деньги, легко рассчитав стоимость регистрации вашего знака в разных странах мира, всего одним кликом.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 2 }}>
        <Button variant="contained" color="primary" size="large" startIcon={<InfoIcon />} onClick={handleOpen}>
          Узнать больше
        </Button>
      </Box>
      <Typography variant="h5" gutterBottom>
        Почему выбирают нас?
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" gutterBottom>
            Точность и актуальность: Наш калькулятор использует последние данные о тарифах и сборах, обеспечивая вас самой точной оценкой стоимости.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            Экономия времени: Забудьте о долгих консультациях и изучении сложных тарифов. С нашим инструментом вы получите предварительную оценку мгновенно.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            Поддержка экспертов: Наш сайт не только предоставляет удобный калькулятор, но и наполнен полезными статьями и рекомендациями по регистрации товарных знаков.
          </Typography>
        </li>
      </ul>
      <Typography variant="h5" gutterBottom>
        Мадридская система - ваш ключ к международной защите бренда.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Один шаг для подачи заявки и ваш товарный знак защищен во множестве стран по всему миру. Это не просто экономия ресурсов, это стратегическое вложение в будущее вашего бизнеса.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Начните сейчас
      </Typography>
      <Typography variant="body1" gutterBottom>
        Не упускайте возможность максимально эффективно инвестировать в интеллектуальную собственность вашей компании. Попробуйте наш калькулятор сегодня и шагните на новый уровень международного признания и защиты вашего бренда. Ваши амбиции заслуживают мирового внимания, и мы здесь, чтобы помочь вам их реализовать!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Если у вас возникнут вопросы, наши квалифицированные специалисты всегда к вашим услугам. Доверьте свой бренд профессионалам – выберите наш калькулятор для надежной и прозрачной оценки стоимости регистрации международного товарного знака.
      </Typography>
      <ProtocolModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Advertisement;
