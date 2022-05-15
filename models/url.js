import mongoose from 'mongoose';

const UrlSchema = mongoose.Schema({
  trackName: { type: String, required: true },
  artistName: { type: String, required: true },
  videoId: { type: String, required: true },
});

export default mongoose.models.Url || mongoose.model('Url', UrlSchema);
