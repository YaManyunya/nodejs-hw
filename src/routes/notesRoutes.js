import { Router } from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.post('/notes', createNote);
router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
