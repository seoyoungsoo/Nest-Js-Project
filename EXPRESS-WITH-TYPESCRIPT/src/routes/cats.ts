// 고양이 전체 데이터 조회
import { Router } from 'express';
import { Cat, CatType } from '../models/cats';

const router = Router();

router.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

// 특정 고양이 데이터 조회
router.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.filter((cat) => cat.id === params.id);

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

// 새로운 고양이 추가
// JSON을 읽을 수 있도록 미들웨어를 추가해줘야 함
router.post('/cats', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);

    res.status(200).send({
      success: true,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

// 고양이 데이터 업데이트
router.put('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

// 고양이 데이터 부분 업데이트
router.patch('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

// 고양이 데이터 삭제
router.delete('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

export default router;
